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
declare variable $scripts:docErrorMessages as document-node() := fn:doc('./docs/cdrqaqc.xml');
declare variable $scripts:vocabCountries := 'http://dd.eionet.europa.eu/vocabulary/ias/countries';
declare variable $scripts:vocabSpeciesPresence := 'http://dd.eionet.europa.eu/vocabulary/ias/speciesPresence';
declare variable $scripts:vocabReproductionPatterns := 'http://dd.eionet.europa.eu/vocabulary/ias/reproductionPatterns';
declare variable $scripts:vocabSpreadPatterns := 'http://dd.eionet.europa.eu/vocabulary/ias/spreadPatterns';
declare variable $scripts:vocabPurposesPermits := 'http://dd.eionet.europa.eu/vocabulary/ias/purposesPermits';
declare variable $scripts:vocabUnits := 'http://dd.eionet.europa.eu/vocabulary/ias/units';


(:~
 : --------------
 : Util functions
 : --------------
 :)

declare function scripts:notYet(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $details :=
        <div class="ias">
            <div class="ias inner msg gray mmessage">
                <span class="ias nowrap header">Not implemented yet</span>
                <br/>
                <span class="ias">This check is still under development</span>
            </div>
        </div>

    return scripts:renderResult($refcode, $rulename, 'message', 1, $details)
};

declare function scripts:notActive(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $details :=
        <div class="ias">
            <div class="ias inner msg gray mnone">
                <span class="ias nowrap header">Not active</span>
                <br/>
                <span class="ias">This check is active from 2018 reporting year onwards</span>
            </div>
        </div>
    return scripts:renderResult($refcode, $rulename, 'message', 1, $details)
};

declare function scripts:notApplicable(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $details :=
        <div class="ias">
            <div class="ias inner msg gray mnone">
                <span class="ias nowrap header">Not applicable</span>
                <br/>
                <span class="ias">This check is not applicable for your country</span>
            </div>
        </div>

    return scripts:renderResult($refcode, $rulename, 'message', 1, $details)
};

declare function scripts:getValidConcepts($url as xs:string) as xs:string* {
    let $valid := "http://dd.eionet.europa.eu/vocabulary/datadictionary/status/valid"

    let $url := $url || "/rdf"
    return
        doc($url)//skos:Concept[adms:status/@rdf:resource = $valid]
                /functx:substring-after-last(@rdf:about, '/')
};

declare function scripts:getMsg(
    $refcode as xs:string
) as xs:string {
    let $url := 'http://dd.eionet.europa.eu/vocabulary/art17_2018/cdrqaqc/'
    let $id := fn:concat($url, $refcode)

    let $errorMsg := $scripts:docErrorMessages//*:containeditems/*:value[@id = $id]/fn:concat(*:label, ' ', *:definition)

    return if(fn:empty($errorMsg))
        then '#Error message missing'
        else $errorMsg

};

(:~
 : --------------
 : html functions
 : --------------
 :)

declare function scripts:createData(
    $sort as xs:integer+,
    $marks as xs:integer+,
    $data as xs:string+
) as map(*) {
    map {
        "sort": $sort,
        "marks": $marks,
        "data": $data
    }
};

declare function scripts:getDetails(
        $refcode as xs:string,
        $type as xs:string,
        $hdrs as (xs:string)*,
        $data as (map(*))*
) as element(div)* {
    let $msgClass := concat('inner msg',
            if ($type = 'blocker') then ' bred mblocker'
            else if ($type = 'error') then ' red merror'
            else if ($type = 'warning') then ' yellow mwarning'
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

    let $type := if($showRecords)
        then $errType
        else 'pass'

    let $errType := if($errCount > 1)
        then concat($errType, 's')
        else $errType

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
(:
 :------------------
 : CHECK FUNCTIONS :
 :------------------
:)

(:~
    G1
:)
declare function scripts:checkG1(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabCountries
    let $countryCode := $root//*:reporting//*:CountryCode => functx:if-empty('')

    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data :=
        if($countryCode = $validConcepts)
        then ()
        else
            let $d := ($countryCode)
            return scripts:createData((1), (1), $d)

    let $hdrs := ('Member state')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)

};

(:~
    G2
:)

declare function scripts:checkG2(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $yearFrom := $root//*:reporting//*:StartYear => functx:if-empty('')

    let $data :=
        if(not($yearFrom = '2015-01-01'))
        then
            let $d := ($yearFrom)
            return scripts:createData((1), (1), $d)
        else ()

    let $hdrs := ('Reporting period start')

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    G3
:)
declare function scripts:checkG3(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $yearEnd := $root//*:reporting//*:EndYear => functx:if-empty('')

    let $data :=
        if(not($yearEnd = '2018-12-31'))
        then
            let $d := ($yearEnd)
            return scripts:createData((1), (1), $d)
        else ()

    let $hdrs := ('Reporting period end')

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A1
:)
declare function scripts:checkA1(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'

    return scripts:notYet($refcode, $rulename, $root)
(:
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
:)
};

(:~
    A2
:)
declare function scripts:checkA2(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'

    return scripts:notYet($refcode, $rulename, $root)
};

(:~
    A3
:)
declare function scripts:checkA3(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'warning'

    return scripts:notYet($refcode, $rulename, $root)
};

(:~
    A4
:)
declare function scripts:checkA4(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    (:let $codeListUrl := $scripts:vocabSpeciesPresence:)
    (:let $validConcepts := scripts:getValidConcepts($codeListUrl):)
    let $seq := $root//*:sectionASpecies
            /*:Row[fn:string-length(*:present_in_MS) > 0]

    let $data :=
        for $species in $seq
            let $present := $species//*:present_in_MS => functx:if-empty('')
            where not($present = ('true', 'false', 'unknown'))

            let $EASINcode := $species/*:EASINCode
            let $d := ($EASINcode, $present)
            return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Present in MS')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A5
:)
declare function scripts:checkA5(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabReproductionPatterns
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $seq := $root//*:sectionASpecies
            /*:Row[fn:string-length(*:reproduction_pattern) > 0]

    let $data :=
        for $species in $seq
            let $present := $species//*:present_in_MS => functx:if-empty('')
            where $present = 'true'
            let $value := $species//*:reproduction_pattern => functx:if-empty('')
            where not($value = $validConcepts)

            let $EASINcode := $species/*:EASINCode
            let $d := ($EASINcode, $value)
            return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Reproduction patterns')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A6
:)
declare function scripts:checkA6(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabSpreadPatterns
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $seq := $root//*:sectionASpecies/*:Row

    let $info := 'Spread pattern is not found in the codelist'
    let $data1 :=
        for $species in $seq
            let $present := $species//*:present_in_MS => functx:if-empty('')
            where $present = 'true'
            let $speciesRowId := $species/*:row_id => fn:number()

            let $seqSpreadPatterns := $root//*:spreadPatterns/*:Row[*:section = 'A'
                and *:parent_row_id = $speciesRowId]

            for $spreadPattern in $seqSpreadPatterns
                let $spread := $spreadPattern/*:spread_pattern => functx:if-empty('')
                where not($spread = $validConcepts)

                let $EASINcode := $species/*:EASINCode
                let $d := ($info ,$EASINcode, $spread)
                return scripts:createData((1), (3), $d)

    let $mandatoryPatternsA := ('enteredNeighbourCountry', 'enteredUnintentional',
        'enteredIntentional', 'enteredNot')
    let $mandatoryPatternsB := ('spreadNatural', 'spreadUnintentional',
        'spreadIntentional', 'spreadNotMs')

    let $infoBase := "Missing categories from spread patterns"

    let $data2 :=
        for $species in $seq
            let $present := $species//*:present_in_MS => functx:if-empty('')
            where $present = 'true'
            let $speciesRowId := $species/*:row_id => fn:number()

            let $spreadPatterns := $root//*:spreadPatterns/*:Row[*:section = 'A'
                and *:parent_row_id = $speciesRowId]/functx:if-empty(*:spread_pattern, '')

            let $valuesA := functx:value-intersect($mandatoryPatternsA, $spreadPatterns)
            let $valuesB := functx:value-intersect($mandatoryPatternsB, $spreadPatterns)

            where empty($valuesA) or empty($valuesB)

            let $infoA := if(empty($valuesA)) then 'b/c/d/e' else ()
            let $infoB := if(empty($valuesB)) then 'f/g/h/I' else ()

            let $EASINcode := $species/*:EASINCode
            let $info := string-join(($infoA, $infoB), ' and ')
            let $d := ($infoBase ,$EASINcode, $info)

            return scripts:createData((1), (3), $d)

    let $data := ($data1, $data2)

    let $hdrs := ('Additional info', 'EASINcode', 'Spread patterns')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A8
:)
declare function scripts:checkA8(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'

    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')

            where not($permits_issued = ('true', 'false'))

            let $EASINcode := $species/*:EASINCode
            let $d := ($EASINcode, $permits_issued)

            return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Permits issued')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A9
:)

declare function scripts:checkA9(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'

    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $year := $per/*:year => fn:number()
                where not($year > 2000 and $year < 2019)

                return
                    map {
                        "sort" : (1),
                        "marks" : (2),
                        "data" : ($EASINcode, $year)
                    }

    let $hdrs := ('EASINcode', 'Year')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A10
:)

declare function scripts:checkA10(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabPurposesPermits
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $permit_purpose := $per/*:permit_purpose => functx:if-empty('')
                where not($permit_purpose = $validConcepts)
                let $d := ($EASINcode, $permit_purpose)

                return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Purpose of permit')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A11
:)

declare function scripts:checkA11(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $number_issued := $per/*:number_issued
                where not(functx:is-a-number($number_issued) and $number_issued >= 0)
                let $d := ($EASINcode, $number_issued)

                return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Number of permits')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A12
:)

declare function scripts:checkA12(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $per_row_id := $per/*:row_id
                let $permSpec := $root//*:permitedSpecimens/*:Row[*:permit_type = 'issued'
                    and *:parent_row_id = $per_row_id]

                for $ps in $permSpec
                    let $value := $ps/*:value
                    where not(functx:is-a-number($value) and $value >= 0)
                    let $d := ($EASINcode, $value)

                    return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Total number or volume')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A13
:)

declare function scripts:checkA13(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabUnits
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $per_row_id := $per/*:row_id
                let $permSpec := $root//*:permitedSpecimens/*:Row[*:parent_row_id = $per_row_id]

                for $ps in $permSpec
                    let $unit := $ps/*:unit
                    let $permit_type := $ps/*:permit_type
                    where not($unit = $validConcepts)
                    let $d := ($EASINcode, $permit_type, $unit)

                    return scripts:createData((1), (3), $d)

    let $hdrs := ('EASINcode', 'Permit type','Units')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A15
:)

declare function scripts:checkA15(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'

    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $year := $ins/*:year => fn:number()
                where not($year > 2000 and $year < 2019)

                return
                    map {
                        "sort" : (1),
                        "marks" : (2),
                        "data" : ($EASINcode, $year)
                    }

    let $hdrs := ('EASINcode', 'Year')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};


(:~
    A16
:)

declare function scripts:checkA16(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabPurposesPermits
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $permit_purpose := $ins/*:permit_purpose => functx:if-empty('')
                where not($permit_purpose = $validConcepts)
                let $d := ($EASINcode, $permit_purpose)

                return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Purpose of permit')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A17
:)

declare function scripts:checkA17(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $number_establishment := $ins/*:number_establishment
                where not(functx:is-a-number($number_establishment)
                    and $number_establishment >= 0)
                let $d := ($EASINcode, $number_establishment)

                return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Number of establishments')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};


(:~
    A18
:)

declare function scripts:checkA18(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $per_row_id := $ins/*:row_id
                let $insPerm := $root//*:inspectionsPermits/*:Row[*:parent_row_id = $per_row_id
                    and *:inspection_status = 'complient']

                for $ip in $insPerm
                    let $inspection_status := $ip/*:inspection_status
                    let $value := $ip/*:value
                    where not(functx:is-a-number($value) and $value >= 0)
                    let $d := ($EASINcode, $inspection_status, $value)

                    return scripts:createData((1), (3), $d)

    let $hdrs := ('EASINcode', 'Inspection type',
        'Number of volume of permitted specimens corresponding to permits')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};


(:~
    A19
:)

declare function scripts:checkA19(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]
    let $codeListUrl := $scripts:vocabUnits
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $per_row_id := $ins/*:row_id
                let $insPerm := $root//*:inspectionsPermits/*:Row[*:parent_row_id = $per_row_id
                    and *:inspection_status = 'complient']

                for $ip in $insPerm
                    let $inspection_status := $ip/*:inspection_status
                    let $unit := $ip/*:unit
                    where not($unit = $validConcepts)
                    let $d := ($EASINcode, $inspection_status, $unit)

                    return scripts:createData((1), (3), $d)

    let $hdrs := ('EASINcode', 'Inspection type', 'Units')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A20
:)

declare function scripts:checkA20(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $number_inspected := $ins/*:number_inspected
                where not(functx:is-a-number($number_inspected)
                    and $number_inspected >= 0)
                let $d := ($EASINcode, $number_inspected)

                return scripts:createData((1), (2), $d)

    let $hdrs := ('EASINcode', 'Number of inspected establishments')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};


(:~
    A21
:)

declare function scripts:checkA21(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $per_row_id := $ins/*:row_id
                let $insPerm := $root//*:inspectionsPermits/*:Row[*:parent_row_id = $per_row_id
                    and *:inspection_status = 'noncompliant']

                for $ip in $insPerm
                    let $inspection_status := $ip/*:inspection_status
                    let $value := $ip/*:value
                    where not(functx:is-a-number($value) and $value >= 0)
                    let $d := ($EASINcode, $inspection_status, $value)

                    return scripts:createData((1), (3), $d)

    let $hdrs := ('EASINcode', 'Inspection type',
        'Number or volumen of permitted specimens corresponding to permits held by establishments')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};


(:~
    A22
:)

declare function scripts:checkA22(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row[fn:string-length(*:permits_issued) > 0]
    let $codeListUrl := $scripts:vocabUnits
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            where $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $ins in $inspections
                let $per_row_id := $ins/*:row_id
                let $insPerm := $root//*:inspectionsPermits/*:Row[*:parent_row_id = $per_row_id
                    and *:inspection_status = 'noncompliant']

                for $ip in $insPerm
                    let $inspection_status := $ip/*:inspection_status
                    let $unit := $ip/*:unit
                    where not($unit = $validConcepts)
                    let $d := ($EASINcode, $inspection_status, $unit)

                    return scripts:createData((1), (3), $d)

    let $hdrs := ('EASINcode', 'Inspection type', 'Units')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};
