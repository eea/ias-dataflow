xquery version "3.1" encoding "utf-8";

declare namespace ias = "http://cdrtest.eionet.europa.eu/ias";
declare namespace gml = "http://www.opengis.net/gml/3.2";
declare namespace xlink = "http://www.w3.org/1999/xlink";

import module namespace scripts = "ias-scripts" at "ias-scripts.xq";
import module namespace common = "ias-common" at "ias-common.xq";
import module namespace functx = "http://www.functx.com" at "ias-functx.xq";

declare variable $source_url external;

(:~
 : --------------
 : Util functions
 : --------------
 :)

declare function ias:getNoDetails(
) as element(div)* {
    <div class="ias">
        <div class="ias inner msg gray mmessage">
            <span class="ias nowrap header">Not implemented yet</span>
            <br/>
            <span class="ias">This check is still under development</span>
        </div>
    </div>
};

declare function ias:getNotActive(
) as element(div)* {
    <div class="ias">
        <div class="ias inner msg gray mnone">
            <span class="ias nowrap header">Not active</span>
            <br/>
            <span class="ias">This check is active from 2018 reporting year onwards</span>
        </div>
    </div>
};

declare function ias:getNotApplicable(
) as element(div)* {
    <div class="ias">
        <div class="ias inner msg gray mnone">
            <span class="ias nowrap header">Not applicable</span>
            <br/>
            <span class="ias">This check is not applicable for your country</span>
        </div>
    </div>
};

declare function ias:getErrorDetails(
        $code as xs:QName,
        $description as xs:string?
) as element(div)* {
    <div class="ias">
        <div class="ias inner msg red merror">
            <span class="ias nowrap header">Error <a href="https://www.w3.org/2005/xqt-errors/">{$code}</a></span>
            <br/>
            <span class="ias">{$description}</span>
        </div>
    </div>
};
(:

declare function ias:renderResult(
        $refcode as xs:string,
        $rulename as xs:string,
        $type as xs:string,
        $details as element()*
) {
    let $id := random:integer(65536)

    let $label :=
        <label class="ias" for="toggle-{$id}">
            <span class="ias link">More...</span>
        </label>

    let $toggle :=
        <input class="ias toggle" id="toggle-{$id}" type="checkbox" />

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
                            {if ($type = 'error') then
                                <span class="ias nowrap">1 error</span>
                            else
                                <span class="ias nowrap">1 message</span>
                            }
                        </div>

                        <div class="ias col ten center middle">
                            {$label}
                        </div>
                    </div>
                </div>

                <!-- details table -->
                {$toggle, $details}
            </div>
        </div>
};
:)

declare function ias:notYet(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $details := ias:getNoDetails()
    return scripts:renderResult($refcode, $rulename, 'message', 1, $details)
};

declare function ias:notActive(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $details := ias:getNotActive()
    return scripts:renderResult($refcode, $rulename, 'message', 1, $details)
};

declare function ias:notApplicable(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $details := ias:getNotApplicable()
    return scripts:renderResult($refcode, $rulename, 'message', 1, $details)
};

declare function ias:failsafeWrapper(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $checkFunc as function(xs:string, xs:string, element()) as element()*
) as element()* {
    try {
        $checkFunc($refcode, $rulename, $root)
    } catch * {
        let $details := ias:getErrorDetails($err:code, $err:description)
        return scripts:renderResult($refcode, $rulename, 'failed', 1 , $details)
    }
};

(:~
   1. Reporting party checks
:)

declare function ias:runChecks01($root as element()) as element()* {
    let $rulename := '1. REPORTING PARTY CHECKS'

    return
        <div class="ias header">{$rulename}</div>,
        <div class="ias table parent">{
            ias:failsafeWrapper("G1", "0.1 - Member State", $root, scripts:checkG1#3),
            ias:failsafeWrapper("G2", "0.2 - Reporting period from", $root, scripts:checkG1#3),
            ias:failsafeWrapper("G3", "0.2 - Reporting period to", $root, ias:notYet#3)
        }</div>
};


(:~
 : 2. SECTION A -  IAS of Union concern
:)

declare function ias:runChecks02($root as element()) as element()* {
    let $rulename := '2. SECTION A -  IAS of Union concern'

    return
        <div class="ias header">{$rulename}</div>,
        <div class="ias table parent">{
            ias:failsafeWrapper("A1", "Question 1 - Scientific name", $root, ias:notYet#3),
            ias:failsafeWrapper("A2", "Question 1 - EASIN Id", $root, ias:notYet#3),
            ias:failsafeWrapper("A3", "Question 2 - Common name", $root, ias:notYet#3),
            ias:failsafeWrapper("A4", "Question 3 - Presence", $root, ias:notYet#3),
            ias:failsafeWrapper("A5", "Question 4 - Reproduction patterns", $root, ias:notYet#3),
            ias:failsafeWrapper("A6", "Question 4 - Spread patterns", $root, ias:notYet#3),
            ias:failsafeWrapper("A8",
                    "Question 5 - additional information on species, distribution, spread and reproduction patterns",
                    $root, ias:notYet#3),
            ias:failsafeWrapper("A9", "Question 7 - Information on permits, Year", $root, ias:notYet#3),
            ias:failsafeWrapper("A10", "Question 7 - Information on permits, Purpose of permit", $root, ias:notYet#3),
            ias:failsafeWrapper("A11", "Question 7 - Information on permits, Number of permits", $root, ias:notYet#3),
            ias:failsafeWrapper("A12", "Question 7 - Information on permits, Total number or volume", $root, ias:notYet#3),
            ias:failsafeWrapper("A13", "Question 7 - Information on permits, Unit", $root, ias:notYet#3),
            ias:failsafeWrapper("A15", "Question 9 – information on inspections, Year", $root, ias:notYet#3),
            ias:failsafeWrapper("A16", "Question 9 – information on inspections, Purpose of permit", $root, ias:notYet#3),
            ias:failsafeWrapper("A17", "Question 9 – information on inspections, Number of establishments", $root, ias:notYet#3),
            ias:failsafeWrapper("A18",
                    "Question 9 – information on inspections, Number of volume of permitted specimens corresponding to permits",
                    $root, ias:notYet#3),
            ias:failsafeWrapper("A19", "Question 9 – information on inspections, Unit", $root, ias:notYet#3),
            ias:failsafeWrapper("A20", "Question 9 – information on inspections, Number of inspected establishments", $root, ias:notYet#3),
            ias:failsafeWrapper("A21",
                    "Question 9 – information on inspections, Number or volumen of permitted specimens corresponding to permits held by establishments",
                    $root, ias:notYet#3),
            ias:failsafeWrapper("A22", "Question 9 – information on inspections, Unit", $root, ias:notYet#3)
        }</div>
};

(:~
 : 3. SECTION B -  IAS of Member State concern
 :)

declare function ias:runChecks03($root as element()) as element()* {
    let $rulename := '3. SECTION B -  IAS of Member State concern'

    return
        <div class="ias header">{$rulename}</div>,
        <div class="ias table parent">{
            ias:failsafeWrapper("B1", "Question 1 - National list established yes/no", $root, ias:notYet#3),
            ias:failsafeWrapper("B2", "Question 2 - Scientific name", $root, ias:notYet#3)
        }</div>
};

(:~
 : 4. SECTION C -  Horizontal information
 :)

declare function ias:runChecks04($root as element()) as element()* {
    let $rulename := '4. SECTION C -  Horizontal information'

    return
        <div class="ias header">{$rulename}</div>,
        <div class="ias table parent">{
            ias:failsafeWrapper("C1", "Question 1 – Link to information - Art. 8(7)", $root, ias:notYet#3),
            ias:failsafeWrapper("C2", "Question 2 – documents describing action plans – Art. 13(2)", $root, ias:notYet#3)
        }</div>
};

declare function ias:runChecks($url as xs:string) as element()*
{
    let $doc := doc($url)
    let $root := $doc/*:IAS

    let $envelopeURL := functx:substring-before-last-match($url, '/') || '/xml'

    let $add-envelope-url := %updating function ($root, $url ) {
    insert node <gml:metaDataProperty xlink:href="{$url}"></gml:metaDataProperty> as first into $root
    }

    let $root := $root update (
    updating $add-envelope-url(., $envelopeURL)
    )

    return common:feedback((
        common:header(),
        ias:runChecks01($root),
        ias:runChecks02($root),
        ias:runChecks03($root),
        ias:runChecks04($root)
    ))
};

declare function ias:check($url as xs:string) as element ()*
{
    (:ias:css(), :)
    ias:runChecks($url)
};

ias:check($source_url)
