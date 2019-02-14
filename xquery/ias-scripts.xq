xquery version "3.1" encoding "utf-8";


module namespace scripts = "ias-scripts";

declare namespace act-core = 'http://inspire.ec.europa.eu/schemas/act-core/4.0';
declare namespace adms = "http://www.w3.org/ns/adms#";
declare namespace base = "http://inspire.ec.europa.eu/schemas/base/3.3";
declare namespace EUReg = 'http://dd.eionet.europa.eu/euregistryonindustrialsites';
declare namespace GML = "http://www.opengis.net/gml";
declare namespace gml = "http://www.opengis.net/gml/3.2";
declare namespace math = "http://www.w3.org/2005/xpath-functions/math";
declare namespace ogr = "http://ogr.maptools.org/";
declare namespace pf = "http://inspire.ec.europa.eu/schemas/pf/4.0";
declare namespace rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
declare namespace rest = "http://basex.org/rest";
declare namespace skos = "http://www.w3.org/2004/02/skos/core#";
declare namespace xlink = "http://www.w3.org/1999/xlink";

import module namespace functx = "http://www.functx.com" at "ias-functx.xq";
import module namespace geo = "http://expath.org/ns/geo";

declare variable $scripts:MSG_LIMIT as xs:integer := 1000;
(:declare variable $scripts:urlErrorMessages as xs:string := './docs/cdrqaqc.xml';:)
declare variable $scripts:docErrorMessages as document-node() := fn:doc('./docs/cdrqaqc.xml');

(:~
 : --------------
 : Util functions
 : --------------
 :)

declare function scripts:getValidConcepts($value as xs:string) as xs:string* {
    let $valid := "http://dd.eionet.europa.eu/vocabulary/datadictionary/status/valid"

    let $vocabulary := "http://dd.eionet.europa.eu/vocabulary/euregistryonindustrialsites/"
    let $vocabularyconcept := "http://dd.eionet.europa.eu/vocabularyconcept/euregistryonindustrialsites/"

    let $url := $vocabulary || $value || "/rdf"

    return
        data(doc($url)//skos:Concept[adms:status/@rdf:resource = $valid]/@rdf:about)
};

declare function scripts:getMsg(
    $refcode as xs:string
) as xs:string {
    let $url := 'http://dd.eionet.europa.eu/vocabulary/art17_2018/cdrqaqc/'
    let $id := fn:concat($url, $refcode)

    let $errorMsg := $scripts:docErrorMessages//*:containeditems/*:value[@id = $id]/fn:concat(*:label, ' ', *:definition)
    (:let $errorMsg := $scripts:docErrorMessages//*:containeditems/*:value[@id = $id]/*:label/text():)

    return if(fn:empty($errorMsg))
        then '#Error message not found'
        else $errorMsg

};

declare function scripts:getDetails(
        $refcode as xs:string,
        $type as xs:string,
        $hdrs as (xs:string)*,
        $data as (map(*))*
) as element(div)* {
    let $msgClass := concat('inner msg',
            if ($type = 'blocker') then ' red mblocker'
            else if ($type = 'error') then ' yellow merror'
            else if ($type = 'warning') then ' green mwarning'
            else if ($type = 'info') then ' blue minfo'
                else ()
    )
    let $msg := scripts:getMsg($refcode)

    return
        <div class="ias">

            <div class="ias {$msgClass}">{$msg}</div>

            {if (fn:count($data) > 0)
            then
                <div class="ias table inner">
                    <div class="ias row">
                        {for $h in $hdrs
                        return
                            <div class="ias col inner th"><span class="ias nowrap">{$h}</span></div>
                        }
                    </div>
                    {for $d in $data
                    let $sort_index := if ('sort' = map:keys($d)) then $d?sort else 1
                    count $pos
                    where $pos <= $scripts:MSG_LIMIT
                    order by $d?data[$sort_index]
                    return
                        <div class="ias row">
                            {for $z at $i in $d('data')
                            let $x := if (fn:index-of($d('marks'), $i)) then <span class="ias nowrap">{$z}</span> else $z
                            return
                                <div class="ias col inner{if (fn:index-of($d('marks'), $i)) then ' ' || $type else ''}">{$x}</div>
                            }
                        </div>
                    }
                </div>
            else ()
            }
        </div>
};

(:~
 : --------------
 : html functions
 : --------------
 :)

declare function scripts:renderResult(
        $refcode as xs:string,
        $rulename as xs:string,
        $errType as xs:string,
        $errCount as xs:integer,
        $details as element()*
) {
    let $id := random:integer(65536)

    let $label :=
        <label class="ias" for="toggle-{$id}">
            <span class="ias link">More...</span>
        </label>

    let $toggle :=
        <input class="ias toggle" id="toggle-{$id}" type="checkbox" />

    let $showRecords := ($errCount > 0)

    let $type := $errType

    return
        <div class="ias row">
            <div class="ias col outer noborder">

                <!-- report table -->
                <div class="ias table">
                    <div class="ias row">
                        <div class="ias col ten center middle">
                            <span class="ias medium {$type}">{$refcode}</span>
                        </div>

                        <div class="ias col left middle">
                            <span class="ias">{$rulename}</span>
                        </div>

                        <div class="ias col quarter right middle">
                            <span class="ias nowrap">{concat($errCount, ' ', $errType)}</span>
                        </div>

                        <div class="ias col ten center middle">
                            {if ($showRecords) then
                                $label
                            else ' '}
                        </div>
                    </div>
                </div>

                <!-- details table -->
                {if ($showRecords) then
                    ($toggle, $details)
                else
                    ()
                }
            </div>
        </div>
};

(:~
    G1
:)

declare function scripts:checkG1(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'

    let $data :=
        map {
            "sort": (2),
            "marks" : (3),
            "data" : ('aaaaa', 'bbbbbb', 'ccccccc', 'ddddddddddd')
        }

    let $hdrs := ('Feature main', 'GML ID', 'Feature sub', 'Attribute')

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};
