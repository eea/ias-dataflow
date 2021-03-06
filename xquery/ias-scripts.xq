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
import module namespace http = "http://expath.org/ns/http-client";

declare variable $scripts:MSG_LIMIT as xs:integer := 1000;
declare variable $scripts:PRESENT_IN_MS as xs:string+ := ('true');

declare variable $scripts:docErrorMessages as document-node() := fn:doc('http://dd.eionet.europa.eu/vocabulary/ias/cdrqaqc/codelist');
declare variable $scripts:vocabCountries := 'http://dd.eionet.europa.eu/vocabulary/ias/countries';
declare variable $scripts:vocabSpeciesPresence := 'http://dd.eionet.europa.eu/vocabulary/ias/speciesPresence';
declare variable $scripts:vocabReproductionPatterns := 'http://dd.eionet.europa.eu/vocabulary/ias/reproductionPatterns';
declare variable $scripts:vocabSpreadPatterns := 'http://dd.eionet.europa.eu/vocabulary/ias/spreadPatterns';
declare variable $scripts:vocabPurposesPermits := 'http://dd.eionet.europa.eu/vocabulary/ias/purposesPermits';
declare variable $scripts:vocabUnits := 'http://dd.eionet.europa.eu/vocabulary/ias/units';
declare variable $scripts:vocabMethodsUsed := 'http://dd.eionet.europa.eu/vocabulary/ias/measuresMethods';
declare variable $scripts:vocabNuts := 'http://dd.eionet.europa.eu/vocabulary/common/nuts2016';
declare variable $scripts:vocabBioGeoReg := 'http://dd.eionet.europa.eu/vocabulary/ias/bioGeoReg';
declare variable $scripts:vocabMarineRegions := 'http://dd.eionet.europa.eu/vocabulary/msfd/regions';
declare variable $scripts:vocabMeasuresObj := 'http://dd.eionet.europa.eu/vocabulary/ias/measuresObjectives';
declare variable $scripts:vocabMeasuresEffect := 'http://dd.eionet.europa.eu/vocabulary/ias/measuresEffectiveness';
declare variable $scripts:vocabHDspecies := 'http://dd.eionet.europa.eu/vocabulary/art17_2018/HDspecies';
declare variable $scripts:vocabHabitats := 'http://dd.eionet.europa.eu/vocabulary/art17_2018/habitats';
declare variable $scripts:vocabMeasures := 'http://dd.eionet.europa.eu/vocabulary/ias/measures';
declare variable $scripts:vocabPathways := 'http://dd.eionet.europa.eu/vocabulary/ias/pathways';

declare variable $scripts:codesRiverBasins := fn:doc('https://converters.eionet.europa.eu/xmlfile/river_basins.xml');
declare variable $scripts:codesEcosystems := fn:doc('https://converters.eionet.europa.eu/xmlfile/ecosystems.xml');
declare variable $scripts:speciesA := fn:doc('https://converters.eionet.europa.eu/xmlfile/species_a.xml');
declare variable $scripts:speciesB := fn:doc('https://converters.eionet.europa.eu/xmlfile/species_b.xml');
declare variable $scripts:nationalListCustom := fn:doc('https://converters.eionet.europa.eu/xmlfile/national_list_custom.xml');
declare variable $scripts:EASINcodes := $scripts:speciesA//element/speciesCode;

(:~
 : --------------
 : Util functions
 : --------------
 :)

declare function scripts:getCountryCode(
    $root as element()
) as xs:string {
    let $countryCodeMap := map {
        'GB': 'UK',
        'EL': 'GR'
    }
    let $countryCode := $root//*:reporting//*:CountryCode => functx:if-empty('')

    return if($countryCode = map:keys($countryCodeMap))
        then $countryCodeMap($countryCode)
        else $countryCode
};


declare function scripts:getMandatoryElement(
    $measure_type as xs:string
) as xs:string{
    let $mandatoryElementName :=
        if($measure_type = 'eradication')
        then 'eradication_measures'
        else 'subject_management_measures'

    return $mandatoryElementName
};

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

declare function scripts:getValidPrefLabels($url as xs:string) as xs:string* {
    let $valid := "http://dd.eionet.europa.eu/vocabulary/datadictionary/status/valid"

    let $url := $url || "/rdf"
    return
        doc($url)//skos:Concept[adms:status/@rdf:resource = $valid]
                /fn:replace(skos:prefLabel, ' ', '')
};

declare function scripts:getValidNotations($url as xs:string) as xs:string* {
    let $valid := "http://dd.eionet.europa.eu/vocabulary/datadictionary/status/valid"

    let $url := $url || "/rdf"
    return
        doc($url)//skos:Concept[adms:status/@rdf:resource = $valid]
                /skos:notation
};

declare function scripts:getMsg(
    $refcode as xs:string
) as element()+ {
    let $url := 'http://dd.eionet.europa.eu/vocabulary/ias/cdrqaqc/'
    let $id := fn:concat($url, $refcode)

    (:let $errorMsg := $scripts:docErrorMessages//*:containeditems/*:value[@id = $id]/fn:concat(*:label, ' ', *:definition):)
    let $label := $scripts:docErrorMessages//*:containeditems/*:value[@id = $id]/*:label
    let $def := $scripts:docErrorMessages//*:containeditems/*:value[@id = $id]/*:definition
    let $errorMsg := (
            <p class="ias error-text">{$label/text()}</p>,
            <p class="ias error-text">{$def/text()}</p>)


    return if(functx:if-empty($label, '') = '')
        then <p class="ias error-text">#Error message missing</p>
        else $errorMsg

};

(:~
 : --------------
 : html functions
 : --------------
 :)

declare function scripts:createData(
    $sort as xs:integer+,
    $marks as xs:integer*,
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
                <div class="ias table inner" error_type="{$type}" error_code="{$refcode}">
                    <div class="ias row">
                        {for $h in $hdrs
                        return
                            <div class="ias col inner th"><span class="ias">{$h}</span></div>
                        }
                    </div>
                    {for $d in $data
                    let $sort_index := if ('sort' = map:keys($d)) then $d?sort else 1
                    count $pos
                    where $pos <= $scripts:MSG_LIMIT
                    let $sortValue := if($d?data[$sort_index] castable as xs:double)
                        then $d?data[$sort_index] => xs:double()
                        else $d?data[$sort_index]
                    order by $sortValue
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

declare function scripts:renderResult2(
        $refcode as xs:string,
        $rulename as xs:string,
        $errTypeMain as xs:string,
        $errTypeAlt as xs:string,
        $errCountMain as xs:integer,
        $errCountAlt as xs:integer,
        $details as element()*
) {
    let $id := random:integer(65536)

    let $label :=
        <label class="ias" for="toggle-{$id}">
            <span class="ias link">More...</span>
        </label>

    let $toggle :=
        <input class="ias toggle" id="toggle-{$id}" type="checkbox" />

    let $showRecords := (($errCountMain + $errCountAlt) > 0)

    let $type := if($showRecords)
        then if($errCountMain > 0)
            then $errTypeMain
            else $errTypeAlt
        else 'pass'

    let $errTypeMain := if($errCountMain > 1)
        then concat($errTypeMain, 's')
        else $errTypeMain

    let $errTypeAlt := if($errCountAlt > 1)
        then concat($errTypeAlt, 's')
        else $errTypeAlt

    let $typesMessage := concat($errCountMain, ' ', $errTypeMain, ', ',
                            $errCountAlt, ' ', $errTypeAlt)
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
                            <span class="ias nowrap">{$typesMessage}</span>
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

declare function scripts:allRegionsMissing(
        $root as element(),
        $measure_row_id as xs:string
) as xs:boolean {
    let $nutsMissing := count($root//*:partTerritory/*:Row[*:parent_row_id = $measure_row_id]) = 0
    let $bioMissing := count($root//*:biogeographicalRegion/*:Row[*:parent_row_id = $measure_row_id]) = 0
    let $riverMissing := count($root//*:riverBasinSubUnit/*:Row[*:parent_row_id = $measure_row_id]) = 0
    let $marineMissing := count($root//*:marineSubRegions/*:Row[*:parent_row_id = $measure_row_id]) = 0

    return $nutsMissing and $bioMissing and $riverMissing and $marineMissing
};

declare function scripts:checkCodeListRegions(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $species_seq as element()*,
        $level2_seq as element()*,
        $level3_seq as element()*,
        $type as xs:string,
        $element_name as xs:string,
        $codeListUrl as xs:string,
        $hdrs as xs:string+,
        $conditionElement as xs:string
) as element()* {
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $validPrefLabels := scripts:getValidPrefLabels($codeListUrl)
    let $alternateMSG := 'At least one of the Administrative unit - NUTS, Biogeograpical region(s),
            River basin sub-unit(s) or Marine sub-region(s) needs to be reported.'

    let $data :=
        for $species in $species_seq
            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                    => functx:if-empty('')  = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            for $l2 in $level2_seq
                where $l2/*:parent_row_id = $species_row_id
                let $par_row_id := $l2/*:row_id

                return if($isMandatory and scripts:allRegionsMissing($root, $par_row_id))
                then
                    let $code := $alternateMSG
                    let $d := ($EASINcode, $par_row_id/data(), '-' ,$code)
                    return scripts:createData((1), (2), $d)
                else
                for $l3 in $level3_seq
                    where $l3/*:parent_row_id = $par_row_id
                    let $code := $l3/*[local-name() = $element_name] => functx:if-empty('')
                    where not($code = $validConcepts or $code = $validPrefLabels)
                    let $row_id := $l3/*:row_id
                    let $d := ($EASINcode, $par_row_id, $row_id ,$code)

                    return if(($code = '' and $isMandatory) or not($code = ''))
                        then scripts:createData((1), (4), $d)
                        else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

declare function scripts:checkCodeList(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $species_seq as element()*,
        $level2_seq as element()*,
        $level3_seq as element()*,
        $type as xs:string,
        $element_name as xs:string,
        $codeListUrl as xs:string,
        $hdrs as xs:string+,
        $conditionElement as xs:string
) as element()* {
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $validPrefLabels := scripts:getValidPrefLabels($codeListUrl)

    let $data :=
        for $species in $species_seq
            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                    => functx:if-empty('')  = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            for $l2 in $level2_seq
                where $l2/*:parent_row_id = $species_row_id
                let $par_row_id := $l2/*:row_id
                let $level3_seq := $level3_seq[*:parent_row_id = $par_row_id]

                return
                if(count($level3_seq) = 0 and $isMandatory)
                    then
                        let $d := ($EASINcode, $par_row_id, '-' , ' ')
                        return scripts:createData((1), (4), $d)
                else
                for $l3 in $level3_seq
                    let $code := $l3/*[local-name() = $element_name] => functx:if-empty('')
                    where not($code = $validConcepts or $code = $validPrefLabels)
                    let $row_id := $l3/*:row_id
                    let $d := ($EASINcode, $par_row_id, $row_id ,$code)

                    return if(($code = '' and $isMandatory) or not($code = ''))
                        then scripts:createData((1), (4), $d)
                        else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

declare function scripts:checkCodeListL2(
        $refcode as xs:string,
        $rulename as xs:string,
        $species_seq as element()*,
        $level2_seq as element()*,
        $type as xs:string,
        $element_name as xs:string,
        $codeListUrl as xs:string,
        $hdrs as xs:string+,
        $conditionElement as xs:string
) as element()* {
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data :=
        for $species in $species_seq
            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                    => functx:if-empty('')  = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $level2_seq := $level2_seq[functx:substring-before-if-contains(*:parent_row_id, '_')
                    = $species_row_id]

            return
            if(count($level2_seq) = 0 and $isMandatory)
            then
                let $d := ($EASINcode, '-' , ' ')
                return scripts:createData((1), (3), $d)
            else
            for $l2 in $level2_seq
                let $row_id := $l2/*:row_id
                let $code := $l2/*[local-name() = $element_name]
                where not($code = $validConcepts)
                let $d := ($EASINcode, $row_id ,$code)

                return if(($code = '' and $isMandatory) or not($code = ''))
                    then scripts:createData((1), (3), $d)
                    else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

declare function scripts:checkCodeListL1(
        $refcode as xs:string,
        $rulename as xs:string,
        $level1_seq as element()*,
        $type as xs:string,
        $element_name as xs:string,
        $codeListUrl as xs:string,
        $hdrs as xs:string+
) as element()* {
    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $validNotations := scripts:getValidNotations($codeListUrl)

    let $data :=
        for $node in $level1_seq
            let $row_id := $node/*:row_id
            let $code := $node/*[local-name() = $element_name]
            where not($code = $validConcepts or $code = $validNotations)
            let $d := (string($row_id), $code)

            return scripts:createData((1), (2), $d)

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};


(:~
    Population Id check
:)
declare function scripts:checkPopulationId(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $measure_type as xs:string,
        $type as xs:string,
        $seq as element()*,
        $hdrs as xs:string+
) as element()* {
    let $mandatoryElementName := scripts:getMandatoryElement($measure_type)

    let $data :=
        for $species in $seq
            let $mandatoryElement := $species//*[local-name() = $mandatoryElementName]
                => functx:if-empty('')
            let $isMandatory := $mandatoryElement = 'true'

            let $species_row_id := $species/*:row_id
            let $measures := $root//*:sectionAMeasures/*:Row[*:parent_row_id = $species_row_id
                and *:measure_type = $measure_type]
            let $EASINcode := $species/*:EASINCode

            for $measure at $ind in $measures
                let $measure_row_id := $measure/*:row_id
                let $populationId := $measure/*:population_name => functx:if-empty('')
                let $d := ($EASINcode, $measure_row_id, $populationId)
                let $createData := scripts:createData((1), (3), $d)

                return if(($populationId = '' and $isMandatory))
                    then $createData
                    else
                    for $sub in subsequence($measures, $ind + 1)
                        let $populationIdSub := $sub/*:population_name => functx:if-empty('')
                        where $populationIdSub = $populationId

                        return $createData

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
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
    let $codeListUrl := $scripts:vocabCountries
    let $countryCode := scripts:getCountryCode($root)

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
        if(not($yearFrom = '2015-01-01' or $yearFrom = '2015'))
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
        if(not($yearEnd = '2018-12-31' or $yearEnd = '2018'))
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
    let $type := 'warning'
    let $countryCode := scripts:getCountryCode($root)
    let $seq := $root//*:sectionASpecies/*:Row
    let $element_name := concat($countryCode, '_CommonName')

    let $data :=
        for $species in $seq
            let $EASINCode := $species/*:EASINCode => functx:if-empty('')
            let $common_name_national := $species/*:common_name_national
                 => functx:if-empty('') => normalize-space() => functx:trim()

            let $commonName_fromlist := $scripts:speciesA
                //element[*:speciesCode = $EASINCode]/*[local-name() = $element_name]
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($common_name_national = $commonName_fromlist)

            let $d := ($EASINCode, $common_name_national)
            return scripts:createData((1), (2), $d)

    let $hdrs := ('EASIN Code', 'Common name national reported')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)

};
declare function scripts:isValidCommonName(
    $common_name as xs:string
)as xs:boolean {
    let $names := fn:tokenize($common_name, ';')
    let $regex := '^[^\[\]\{\}]+(\[[A-Z]{2}\])?$'
    (:let $regexes := ('^[^\[\]\{\}]+$', '^[^\[\]\{\}]+(\[[A-Z]{2}\])$'):)

    let $noMatches :=
        for $name in $names
            (: for regex in $regexes :)
            where not(fn:matches($name, $regex, 'm'))
            return $name

    return count($noMatches) = 0
};

declare function scripts:isCountryValid(
    $common_name as xs:string?,
    $validConcepts as xs:string*
) as xs:boolean {
    let $countries := functx:get-matches($common_name, '\[[^\[\]]+\]')

    let $notOK :=
        for $c in $countries
            let $code := substring-before($c, ']') => substring-after('[')
            where string-length($code) > 0

            return if($code = $validConcepts)
                then ()
                else $c

    return count($notOK) = 0
};

declare function scripts:checkCommonName(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $seq as element()*
) as element()* {
    let $countryCode := scripts:getCountryCode($root)
    let $element_name := concat($countryCode, '_CommonName')
    let $codeListUrl := $scripts:vocabCountries
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data1 :=
        for $species in $seq
            let $EASINCode := $species/*:EASINCode => functx:if-empty('')
            let $common_name_national := $species/*:common_name_national
                 => functx:if-empty('') => normalize-space() => functx:trim()

            let $commonName_fromlist := $scripts:speciesA
                //element[*:speciesCode = $EASINCode]/*[local-name() = $element_name]
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($common_name_national = $commonName_fromlist)
                and scripts:isValidCommonName($common_name_national)
                and scripts:isCountryValid($common_name_national, $validConcepts) = true()

            let $d := ($EASINCode, $common_name_national)
            return scripts:createData((1), (2), $d)

    let $data2 :=
        for $species in $seq
            let $EASINCode := $species/*:EASINCode => functx:if-empty('')
            let $common_name_national := $species/*:common_name_national
                 => functx:if-empty('') => normalize-space() => functx:trim()

            let $commonName_fromlist := $scripts:speciesA
                //element[*:speciesCode = $EASINCode]/*[local-name() = $element_name]
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($common_name_national = $commonName_fromlist)
                and not(scripts:isValidCommonName($common_name_national)
                        and scripts:isCountryValid($common_name_national, $validConcepts) = true())

            let $d := ($EASINCode, $common_name_national)
            return scripts:createData((1), (2), $d)

    let $hdrs := ('EASIN Code', 'Common name')
    let $details :=
        <div class="ias">{
            if (empty($data1)) then () else scripts:getDetails($refcode, "info", $hdrs, $data1),
            if (empty($data2)) then () else scripts:getDetails($refcode, "error", $hdrs, $data2)
        }</div>
    (:let $details := scripts:getDetails($refcode, 'info', $hdrs, $data1):)

    return
        scripts:renderResult2($refcode, $rulename, 'error', 'info', count($data2), count($data1), $details)
};

(:~
    A3
:)
declare function scripts:checkA3(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkCommonName($refcode, $rulename, $root, $seq)
};


declare function scripts:checkSpeciesPresence(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $type as xs:string,
        $seq as element()*,
        $hdrs as xs:string+,
        $has_national_list_MS as xs:string
) as element()* {
    (:let $codeListUrl := $scripts:vocabSpeciesPresence:)
    (:let $validConcepts := scripts:getValidConcepts($codeListUrl):)
    let $isMandatory := $has_national_list_MS = 'true'
    let $data :=
        for $node in $seq
            let $present := $node//*:present_in_MS => functx:if-empty('')
            where not($present = ('true', 'false', 'unknown'))

            let $EASINcode := $node/*:EASINCode
            let $d := ($EASINcode, $present)

            return if(($present = '' and $isMandatory) or not($present = ''))
                then scripts:createData((1), (2), $d)
                else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    A4
:)
declare function scripts:checkA4(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $seq := $root//*:sectionASpecies/*:Row
    let $hdrs := ('EASINcode', 'Present in MS')

    return scripts:checkSpeciesPresence($refcode, $rulename, $root,
        $type, $seq, $hdrs, 'true')
};

declare function scripts:checkReproductionPatterns(
        $refcode as xs:string,
        $rulename as xs:string,
        $type as xs:string,
        $seq as element()*,
        $conditionElement as xs:string
) as element()* {
    let $codeListUrl := $scripts:vocabReproductionPatterns
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data :=
        for $species in $seq
            let $value := $species//*:reproduction_pattern => functx:if-empty('')

            where not($value = $validConcepts)

            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                    => functx:if-empty('')  = 'true'
            let $EASINcode := $species/*:EASINCode
            let $d := ($EASINcode, $value)

            return if(($value = '' and $isMandatory) or not($value = ''))
                then scripts:createData((1), (2), $d)
                else ()

    let $hdrs := ('EASINcode', 'Reproduction patterns')
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
    let $type := 'error'
    let $seq := $root//*:sectionASpecies/*:Row (:[*:present_in_MS = $scripts:PRESENT_IN_MS]:)
    let $conditionElement := 'present_in_MS'

    return scripts:checkReproductionPatterns(
            $refcode, $rulename, $type, $seq, $conditionElement)
};

declare function scripts:checkSpreadPatterns(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $type as xs:string,
        $seq as element()*,
        $section as xs:string,
        $conditionElement as xs:string
) as element()* {
    let $codeListUrl := $scripts:vocabSpreadPatterns
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $info := 'Spread pattern is not found in the codelist'
    let $data1 :=
        for $species in $seq
            let $speciesRowId := $species/*:row_id => fn:number()

            let $seqSpreadPatterns := $root//*:spreadPatterns/*:Row[*:section = $section
                and *:parent_row_id = $speciesRowId]

            for $spreadPattern in $seqSpreadPatterns
                let $spread := $spreadPattern/*:spread_pattern => functx:if-empty('')
                where not($spread = $validConcepts)

                let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                        => functx:if-empty('') = 'true'
                let $EASINcode := $species/*:EASINCode
                let $d := ($info ,$EASINcode, $spread)

                return if(($spread = '' and $isMandatory) or not($spread = ''))
                    then scripts:createData((1), (3), $d)
                    else ()

    let $mandatoryPatternsA := ('enteredNeighbourCountry', 'enteredUnintentional',
        'enteredIntentional', 'enteredNot')
    let $mandatoryPatternsB := ('spreadNatural', 'spreadUnintentional',
        'spreadIntentional', 'spreadNotMs')

    let $infoBase := "Missing categories from spread patterns"

    let $data2 :=
        for $species in $seq
            let $speciesRowId := $species/*:row_id => fn:number()

            let $spreadPatterns := $root//*:spreadPatterns/*:Row[*:section = $section
                and *:parent_row_id = $speciesRowId]/functx:if-empty(*:spread_pattern, '')

            let $valuesA := functx:value-intersect($mandatoryPatternsA, $spreadPatterns)
            let $valuesB := functx:value-intersect($mandatoryPatternsB, $spreadPatterns)

            where empty($valuesA) or empty($valuesB)

            let $infoA := if(empty($valuesA)) then 'b/c/d/e' else ()
            let $infoB := if(empty($valuesB)) then 'f/g/h/I' else ()

            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                => functx:if-empty('') = 'true'

            let $EASINcode := $species/*:EASINCode
            let $info := string-join(($infoA, $infoB), ' and ')
            let $d := ($infoBase ,$EASINcode, $info)

            return if((empty(($valuesA, $valuesB)) and $isMandatory) or not(empty(($valuesA, $valuesB))))
                then scripts:createData((1), (3), $d)
                else ()

    let $data := ($data1, $data2)

    let $hdrs := ('Additional info', 'EASINcode', 'Missing')
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
    let $seq := $root//*:sectionASpecies/*:Row (:[*:present_in_MS = $scripts:PRESENT_IN_MS]:)
    let $section := 'A'
    let $conditionalElement := 'present_in_MS'

    return scripts:checkSpreadPatterns($refcode, $rulename, $root,
        $type, $seq, $section, $conditionalElement)
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

    let $seq := $root//*:sectionASpecies/*:Row

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

    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $row_id := $per/*:row_id
                let $year := $per/*:year
                let $yearNr := $year => fn:number()
                where not($yearNr > 2000 and $yearNr < 2019)

                let $d := ($EASINcode, $row_id, $year)
                return if(($year = '' and $isMandatory) or not($year = ''))
                    then scripts:createData((1), (3), $d)
                    else ()

    let $hdrs := ('EASINcode', 'Permit row ID', 'Year')
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
    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $row_id := $per/*:row_id
                let $permit_purpose := $per/*:permit_purpose => functx:if-empty('')
                where not($permit_purpose = $validConcepts)
                let $d := ($EASINcode, $row_id, $permit_purpose)

                return if(($permit_purpose = '' and $isMandatory) or not($permit_purpose = ''))
                    then scripts:createData((1), (3), $d)
                    else ()

    let $hdrs := ('EASINcode', 'Permit row id', 'Purpose of permit')
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
    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $row_id := $per/*:row_id
                let $number_issued := $per/*:number_issued
                let $ni := $number_issued => functx:if-empty('')
                where not(functx:is-a-number($number_issued)
                    and $number_issued => fn:number() >= 0)
                let $d := ($EASINcode, $row_id, $ni)

                return if(($ni = '' and $isMandatory) or not($ni = ''))
                    then scripts:createData((1), (3), $d)
                    else ()

    let $hdrs := ('EASINcode', 'Permit row ID', 'Number of permits')
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
    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $permits := $root//*:permitsIssuedReported
                    /*:Row[*:parent_row_id = $species_row_id]

            for $per in $permits
                let $per_row_id := $per/*:row_id
                let $permSpec := $root//*:permitedSpecimens/*:Row[*:permit_type = 'issued'
                    and *:parent_row_id = $per_row_id]

                for $ps in $permSpec
                    let $row_id := $ps/*:row_id
                    let $value := $ps/*:value
                    let $v := $value => functx:if-empty('')
                    where not(functx:is-a-number($value) and $value >= 0)
                    let $d := ($EASINcode, $per_row_id, $row_id, $v)

                    return if(($v = '' and $isMandatory) or not($v = ''))
                        then scripts:createData((1), (4), $d)
                        else ()

    let $hdrs := ('EASINcode', 'Permit row ID', 'Specimen row ID','Total number or volume')
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
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:permitsIssuedReported/*:Row
    let $level3_seq := $root//*:permitedSpecimens/*:Row
    let $element_name := 'unit'
    let $hdrs := ('EASINcode', 'Permit row ID', "Row ID", 'Units')
    let $conditionElement := 'permits_issued'

    return scripts:checkCodeList($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
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

    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $no_ins_rep := $species//*:no_inspections_reported
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            where not($no_ins_rep = 'true')
            return if(count($inspections) = 0 and $isMandatory)
            then
                let $d := ("Inspection must be reported or 'No inspections reported' must be ticked", $EASINcode, '-', '-')
                return scripts:createData((1), (), $d)
            else
            for $ins in $inspections
                let $row_id := $ins/*:row_id
                let $year := $ins/*:year
                let $yearNr := $year => fn:number()
                where not($yearNr > 2000 and $yearNr < 2019)
                let $d := ('Year not valid', $EASINcode, $row_id, $year)

                return if(($year = '' and $isMandatory) or not($year = ''))
                    then scripts:createData((1), (4), $d)
                    else ()

    let $hdrs := ('Message', 'EASINcode', 'Inspection row ID', 'Value')
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
    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $no_ins_rep := $species//*:no_inspections_reported
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            where not($no_ins_rep = 'true')
            return if(count($inspections) = 0 and $isMandatory)
            then
                let $d := ("Inspection must be reported or 'No inspections reported' must be ticked", $EASINcode, '-', '-')
                return scripts:createData((1), (), $d)
            else
            for $ins in $inspections
                let $row_id := $ins/*:row_id
                let $permit_purpose := $ins/*:permit_purpose => functx:if-empty('')
                where not($permit_purpose = $validConcepts)
                let $d := ('Purpose of permit not valid', $EASINcode, $row_id, $permit_purpose)

                return if(($permit_purpose = '' and $isMandatory) or not($permit_purpose = ''))
                    then scripts:createData((1), (4), $d)
                    else ()

    let $hdrs := ('Message', 'EASINcode', 'Inspection row ID', 'Value')
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
            let $isMandatory := $permits_issued = 'true'
            let $no_ins_rep := $species//*:no_inspections_reported
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            where not($no_ins_rep = 'true')
            return if(count($inspections) = 0 and $isMandatory)
            then
                let $d := ("Inspection must be reported or 'No inspections reported' must be ticked", $EASINcode, '-', '-')
                return scripts:createData((1), (), $d)
            else
            for $ins in $inspections
                let $row_id := $ins/*:row_id
                let $number_establishment := $ins/*:number_establishment
                let $ne := $number_establishment => functx:if-empty('')
                where not(functx:is-a-number($number_establishment)
                    and $number_establishment >= 0)
                let $d := ('Number of establishments not valid', $EASINcode, $row_id, $ne)

                return if(($ne = '' and $isMandatory) or not($ne = ''))
                    then scripts:createData((1), (4), $d)
                    else ()

    let $hdrs := ('Message', 'EASINcode', 'Inspection row ID', 'Number of establishments')
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
    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $no_ins_rep := $species//*:no_inspections_reported
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            where not($no_ins_rep = 'true')
            return if(count($inspections) = 0 and $isMandatory)
            then
                let $d := ("Inspection must be reported or 'No inspections reported' must be ticked",
                    $EASINcode, '-', '-', '-', '-')
                return scripts:createData((1), (), $d)
            else
            for $ins in $inspections
                let $per_row_id := $ins/*:row_id
                let $insPerm := $root//*:inspectionsPermits/*:Row[*:parent_row_id = $per_row_id
                    and *:inspection_status = 'complient']

                for $ip in $insPerm
                    let $row_id := $ip/*:row_id
                    let $inspection_status := $ip/*:inspection_status
                    let $value := $ip/*:value
                    let $v := $value => functx:if-empty('')
                    where not(functx:is-a-number($value) and $value >= 0)
                    let $d := ('Number of volume is not valid', $EASINcode, $per_row_id, $row_id, $inspection_status, $v)

                    return if(($v = '' and $isMandatory) or not($v = ''))
                        then scripts:createData((1), (6), $d)
                        else ()

    let $hdrs := ('Message', 'EASINcode', 'Inspection row ID', 'Inspection permit row ID',
        'Inspection type', 'Value')
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
    let $codeListUrl := $scripts:vocabUnits
    let $species_seq := $root//*:sectionASpecies/*:Row[not(*:no_inspections_reported = 'true')]
    let $level2_seq := $root//*:inspectionsPermitsReported/*:Row
    let $level3_seq := $root//*:inspectionsPermits/*:Row[*:inspection_status = 'complient']
    let $element_name := 'unit'
    let $hdrs := ('EASINcode', 'Inspection row ID', "Row ID", 'Units')
    let $conditionElement := 'permits_issued'

    return scripts:checkCodeList($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
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
    let $seq := $root//*:sectionASpecies/*:Row
    let $msg1 := 'Invalid number of inspected establishments'
    let $msg2 := 'Number of inspected establishments must be less or equal
            to number of establisments'

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $no_ins_rep := $species//*:no_inspections_reported
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            where not($no_ins_rep = 'true')
            return if(count($inspections) = 0 and $isMandatory)
            then
                let $d := ("Inspection must be reported or 'No inspections reported' must be ticked",
                    $EASINcode, '-', '-')
                return scripts:createData((1), (), $d)
            else
            for $ins in $inspections
                let $row_id := $ins/*:row_id
                let $number_inspected := $ins/*:number_inspected
                let $number_establishment := $ins/*:number_establishment

                let $ni := $number_inspected => functx:if-empty('')
                let $ne := $number_establishment => functx:if-empty('')

                let $msg :=
                    if(not(functx:is-a-number($number_inspected)
                        and $number_inspected >= 0))
                    then $msg1
                    else if ($number_inspected castable as xs:integer
                            and $number_establishment castable as xs:integer
                            and xs:integer($number_inspected) > xs:integer($number_establishment))
                    then $msg2
                    else ''

                where string-length($msg) > 0
                let $d := ($msg, $EASINcode, $row_id, $ni)

                return if(($ni = '' and $isMandatory) or not($ni = ''))
                    then scripts:createData((1), (4), $d)
                    else ()

    let $hdrs := ('Additional info' ,'EASINcode', 'Inspection row ID',
        'Number of inspected establishments')
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
    let $seq := $root//*:sectionASpecies/*:Row

    let $data :=
        for $species in $seq
            let $permits_issued := $species//*:permits_issued => functx:if-empty('')
            let $isMandatory := $permits_issued = 'true'
            let $no_ins_rep := $species//*:no_inspections_reported
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            let $inspections := $root//*:inspectionsPermitsReported
                    /*:Row[*:parent_row_id = $species_row_id]

            where not($no_ins_rep = 'true')
            return if(count($inspections) = 0 and $isMandatory)
            then
                let $d := ("Inspection must be reported or 'No inspections reported' must be ticked",
                    $EASINcode, '-', '-', '-', '-')
                return scripts:createData((1), (), $d)
            else
            for $ins in $inspections
                let $per_row_id := $ins/*:row_id
                let $insPerm := $root//*:inspectionsPermits/*:Row[*:parent_row_id = $per_row_id
                    and *:inspection_status = 'noncompliant']

                for $ip in $insPerm
                    let $row_id := $ip/*:row_id
                    let $inspection_status := $ip/*:inspection_status
                    let $value := $ip/*:value
                    let $v := $value => functx:if-empty('')
                    where not(functx:is-a-number($value) and $value >= 0)
                    let $d := ('Number or permitted specimens is not valid', $EASINcode, $per_row_id, $row_id, $inspection_status, $v)

                    return if(($v = '' and $isMandatory) or not($v = ''))
                        then scripts:createData((1), (6), $d)
                        else ()

    let $hdrs := ('Message', 'EASINcode', 'Inspection row ID', 'Inspection permit row ID',
        'Inspection type', 'Value')
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
    let $codeListUrl := $scripts:vocabUnits
    let $species_seq := $root//*:sectionASpecies/*:Row[not(*:no_inspections_reported = 'true')]
    let $level2_seq := $root//*:inspectionsPermitsReported/*:Row
    let $level3_seq := $root//*:inspectionsPermits/*:Row[*:inspection_status = 'noncompliant']
    let $element_name := 'unit'
    let $hdrs := ('EASINcode', 'Inspection row ID', "Row ID", 'Units')
    let $conditionElement := 'permits_issued'

    return scripts:checkCodeList($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

declare function scripts:checkYesNo(
        $refcode as xs:string,
        $rulename as xs:string,
        $type as xs:string,
        $seq as element()*,
        $element_name as xs:string,
        $hdrs as xs:string+
) as element()* {
    let $data :=
        for $node in $seq
            let $value := $node//*[local-name() = $element_name]
                => functx:if-empty('')

            where not($value = ('true', 'false'))

            let $row_id := $node/*:row_id
            let $EASINcode := $node/*:EASINCode
            let $d := ($EASINcode, $row_id, $value)

            return scripts:createData((2), (3), $d)

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A24
:)

declare function scripts:checkA24(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $seq := $root//*:sectionASpecies/*:Row
    let $element_name := 'eradication_measures'
    let $hdrs := ('EASINcode', 'Row ID', 'Rapid eradication measures executed')

    return scripts:checkYesNo($refcode, $rulename, $type,
        $seq, $element_name, $hdrs)
};

(:
    A59
:)
declare function scripts:checkA59(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Population Id')
    let $measure_type := 'eradication'
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkPopulationId($refcode, $rulename, $root, $measure_type,
            $type, $seq, $hdrs)
};

(:~
    Start date check
:)
declare function scripts:checkStartDate(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $measure_type as xs:string,
        $type as xs:string,
        $seq as element()*,
        $hdrs as xs:string+
) as element()* {
    let $mandatoryElementName := scripts:getMandatoryElement($measure_type)
    let $data :=
        for $species in $seq
            let $mandatoryElement := $species//*[local-name() = $mandatoryElementName]
                => functx:if-empty('')
            let $isMandatory := $mandatoryElement = 'true'

            let $species_row_id := $species/*:row_id
            let $measures := $root//*:sectionAMeasures/*:Row[*:parent_row_id = $species_row_id
                and *:measure_type = $measure_type]
            let $EASINcode := $species/*:EASINCode

            for $measure in $measures
                let $measure_row_id := $measure/*:row_id
                let $start_date := $measure/*:start_date
                where not($start_date castable as xs:date)
                    or xs:date($start_date) < xs:date('2000-01-01')
                let $d := ($EASINcode, $measure_row_id, $start_date => functx:if-empty(' '))

                return if(($start_date = '' and $isMandatory) or not($start_date = ''))
                    then scripts:createData((1), (3), $d)
                    else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    A25
:)
declare function scripts:checkA25(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Start date')
    let $measure_type := 'eradication'
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkStartDate($refcode, $rulename, $root, $measure_type,
            $type, $seq, $hdrs)
};

(:~
    End date check
:)
declare function scripts:checkEndDate(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $measure_type as xs:string,
        $type as xs:string,
        $seq as element()*,
        $hdrs as xs:string+
) as element()* {
    let $mandatoryElementName := scripts:getMandatoryElement($measure_type)
    let $data :=
        for $species in $seq
            let $mandatoryElement := $species//*[local-name() = $mandatoryElementName]
                => functx:if-empty('')
            let $isMandatory := $mandatoryElement = 'true'

            let $species_row_id := $species/*:row_id
            let $measures := $root//*:sectionAMeasures/*:Row[*:parent_row_id = $species_row_id
                and *:measure_type = $measure_type]
            let $EASINcode := $species/*:EASINCode

            for $measure in $measures
                let $measure_row_id := $measure/*:row_id
                let $start_date := $measure/*:start_date
                let $end_date := $measure/*:end_date
                where not($end_date castable as xs:date and $start_date castable as xs:date)
                    or not(xs:date($end_date) > xs:date($start_date))
                let $d := (
                    $EASINcode,
                    $measure_row_id,
                    $start_date => functx:if-empty(' '),
                    $end_date => functx:if-empty(' ')
                )

                return if(($end_date = '' and $isMandatory) or not($end_date = ''))
                    then scripts:createData((1), (4), $d)
                    else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    A26
:)
declare function scripts:checkA26(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Start date','End date')
    let $measure_type := 'eradication'
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkEndDate($refcode, $rulename, $root, $measure_type,
            $type, $seq, $hdrs)
};

(:
    A29
:)

declare function scripts:checkA29(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabNuts
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:partTerritory/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Code')
    let $conditionElement := 'eradication_measures'

    return scripts:checkCodeListRegions($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A30
:)

declare function scripts:checkA30(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabBioGeoReg
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:biogeographicalRegion/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Code')
    let $conditionElement := 'eradication_measures'

    return scripts:checkCodeListRegions($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

declare function scripts:checkRiverBasin(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $species_seq as element()*,
        $level2_seq as element()*,
        $level3_seq as element()*,
        $type as xs:string,
        $conditionElement as xs:string
) as element()* {
    let $countryCode := scripts:getCountryCode($root)
    let $codes := $scripts:codesRiverBasins//row[country = $countryCode]/name
    let $hdrs := ('EASINcode', 'Measure row ID', 'River basin row ID', 'River basin code')
    let $alternateMSG := 'At least one of the Administrative unit - NUTS, Biogeograpical region(s),
        River basin sub-unit(s) or Marine sub-region(s) needs to be reported.'

    let $data :=
        for $species in $species_seq
            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                    => functx:if-empty('')  = 'true'
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            for $l2 in $level2_seq
                where $l2/*:parent_row_id = $species_row_id
                let $par_row_id := $l2/*:row_id

                return if($isMandatory and scripts:allRegionsMissing($root, $par_row_id))
                then
                    let $code := $alternateMSG
                    let $d := ($EASINcode, $par_row_id/data(), '-' ,$code)
                    return scripts:createData((1), (2), $d)
                else
                for $l3 in $level3_seq
                    let $row_id := $l3/*:row_id
                    where $l3/*:parent_row_id = $par_row_id
                    let $name := $l3/*:name
                    where not($name = $codes)
                    let $d := ($EASINcode, $par_row_id, $row_id, $name)

                    return if(($name = '' and $isMandatory) or not($name = ''))
                        then scripts:createData((1), (4), $d)
                        else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    A31
:)

declare function scripts:checkA31(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:riverBasinSubUnit/*:Row
    let $conditionElement := 'eradication_measures'

    return scripts:checkRiverBasin($refcode, $rulename, $root, $species_seq,
            $level2_seq, $level3_seq, $type, $conditionElement)
};

(:
    A32
:)

declare function scripts:checkA32(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabMarineRegions
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:marineSubRegions/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Code')
    let $conditionElement := 'eradication_measures'

    return scripts:checkCodeListRegions($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:~
    A35
:)

declare function scripts:checkA35(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabMethodsUsed
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:methodsUsed/*:Row
    let $element_name := 'methods_used'
    let $hdrs := ('EASINcode', "Measure row ID", "Row ID", 'Methods used')
    let $conditionElement := 'eradication_measures'

    return scripts:checkCodeList($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

declare function scripts:checkImpactedSpecies(
        $refcode as xs:string,
        $rulename as xs:string,
        $species_seq as element()*,
        $level2_seq as element()*,
        $level3_seq as element()*,
        $type as xs:string,
        $hdrs as xs:string+,
        $element_name as xs:string,
        $conditionElement as xs:string
) as element()* {
    let $data :=
        for $species in $species_seq
            let $isMandatory := $species/*[local-name() = $conditionElement]/data()
                    => functx:if-empty('')  = 'true'

            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            for $l2 in $level2_seq
                where $l2/*:parent_row_id = $species_row_id
                let $par_row_id := $l2/*:row_id
                let $no_negative_impact := $l2/*:no_negative_impact => functx:if-empty('-')
                where not($no_negative_impact = 'true' and $isMandatory)

                let $impacts :=
                    for $l3 in $level3_seq
                        where $l3/*:parent_row_id = $par_row_id
                        return $l3

                return if(count($impacts) > 0)
                then
                    for $node in $impacts
                        let $value := $node/*[local-name() = $element_name]
                        let $info := 'Missing value'
                        where string-length($value) = 0
                        let $d := ($info, $EASINcode, $par_row_id, $element_name)

                        return scripts:createData((3), (4), $d)
                else
                    let $info := "At least one entry of observed impact must be given, or 'no negative impacts observed' must be ticked"
                    let $d := ($info, $EASINcode, $par_row_id, '-')

                    return scripts:createData((3), (0), $d)

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    A36
:)

declare function scripts:checkA36(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:observedNegativeImpacts/*:Row
    let $hdrs := ('Additional message', 'EASINcode', 'Measure row ID', 'Element name')
    let $element_name := 'non_targeted_species'
    let $conditionElement := 'eradication_measures'

    return scripts:checkImpactedSpecies($refcode, $rulename, $species_seq,
        $level2_seq, $level3_seq, $type, $hdrs, $element_name, $conditionElement)
};

(:
    A37
:)

declare function scripts:checkA37(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'eradication']
    let $level3_seq := $root//*:observedNegativeImpacts/*:Row
    let $hdrs := ('Additional message', 'EASINcode', 'Measure row ID', 'Element name')
    let $element_name := 'species'
    let $conditionElement := 'eradication_measures'

    return scripts:checkImpactedSpecies($refcode, $rulename, $species_seq,
        $level2_seq, $level3_seq, $type, $hdrs, $element_name, $conditionElement)
};

(:~
    A39
:)

declare function scripts:checkA39(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $element_name := 'subject_management_measures'
    let $seq := $root//*:sectionASpecies/*:Row
    let $hdrs := ('EASINcode', 'Row ID', 'Subject to management measures')

    return scripts:checkYesNo($refcode, $rulename, $type,
        $seq, $element_name, $hdrs)
};

(:
    A60
:)
declare function scripts:checkA60(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Population Id')
    let $measure_type := 'management'
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkPopulationId($refcode, $rulename, $root, $measure_type,
            $type, $seq, $hdrs)
};

(:
    A40
:)
declare function scripts:checkA40(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Start date')
    let $measure_type := 'management'
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkStartDate($refcode, $rulename, $root, $measure_type,
            $type, $seq, $hdrs)
};

(:
    A41
:)
declare function scripts:checkA41(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Start date','End date')
    let $measure_type := 'management'
    let $seq := $root//*:sectionASpecies/*:Row

    return scripts:checkEndDate($refcode, $rulename, $root, $measure_type,
            $type, $seq, $hdrs)
};

(:
    A42
:)
declare function scripts:checkA42(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $hdrs := ('EASINcode', 'Row Id', 'Ongoing')
    let $measure_type := 'management'
    let $seq := $root//*:sectionASpecies/*:Row[*:subject_management_measures = 'true']
    let $endYear := $root//*:reporting//*:EndYear

    let $data :=
        for $species in $seq
            let $species_row_id := $species/*:row_id
            let $measures := $root//*:sectionAMeasures/*:Row[*:parent_row_id = $species_row_id
                and *:measure_type = $measure_type]
            let $EASINcode := $species/*:EASINCode

            for $measure in $measures
                let $end_date := $measure/*:end_date
                where not($end_date castable as xs:date and $endYear castable as xs:date)
                    or xs:date($end_date) > xs:date($endYear)
                let $d := ($EASINcode, $measure//*:row_id, $end_date)

                return scripts:createData((1), (3), $d)

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    A43
:)

declare function scripts:checkA43(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabMeasuresObj
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $element_name := 'measure_objective'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Measure objective')
    let $conditionElement := 'subject_management_measures'

    return scripts:checkCodeListL2($refcode, $rulename, $species_seq, $level2_seq,
        $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A44
:)

declare function scripts:checkA44(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabNuts
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:partTerritory/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Code')
    let $conditionElement := 'subject_management_measures'

    return scripts:checkCodeListRegions($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A45
:)

declare function scripts:checkA45(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabBioGeoReg
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:biogeographicalRegion/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Code')
    let $conditionElement := 'subject_management_measures'

    return scripts:checkCodeListRegions($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A46
:)

declare function scripts:checkA46(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:riverBasinSubUnit/*:Row
    let $conditionElement := 'subject_management_measures'

    return scripts:checkRiverBasin($refcode, $rulename, $root, $species_seq,
            $level2_seq, $level3_seq, $type, $conditionElement)
};

(:
    A47
:)

declare function scripts:checkA47(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabMarineRegions
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:marineSubRegions/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Code')
    let $conditionElement := 'subject_management_measures'

    return scripts:checkCodeListRegions($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:~
    A50
:)

declare function scripts:checkA50(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabMethodsUsed
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:methodsUsed/*:Row
    let $element_name := 'methods_used'
    let $hdrs := ('EASINcode', 'Measure row ID', "Row ID", 'Methods used')
    let $conditionElement := 'subject_management_measures'

    return scripts:checkCodeList($refcode, $rulename, $root, $species_seq, $level2_seq,
        $level3_seq, $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:~
    A51
:)

declare function scripts:checkA51(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabMeasuresEffect
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $element_name := 'measure_effectiveness'
    let $hdrs := ('EASINcode', 'Measures row ID', 'Effectiveness of the measures')
    let $conditionElement := 'subject_management_measures'

    return scripts:checkCodeListL2($refcode, $rulename, $species_seq, $level2_seq,
        $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A52
:)

declare function scripts:checkA52(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:observedNegativeImpacts/*:Row
    let $hdrs := ('Additional message', 'EASINcode', 'Measure row ID', 'Element name')
    let $element_name := 'non_targeted_species'
    let $conditionElement := 'subject_management_measures'

    return scripts:checkImpactedSpecies($refcode, $rulename, $species_seq,
        $level2_seq, $level3_seq, $type, $hdrs, $element_name, $conditionElement)
};

(:
    A53
:)

declare function scripts:checkA53(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:sectionAMeasures/*:Row[*:measure_type = 'management']
    let $level3_seq := $root//*:observedNegativeImpacts/*:Row
    let $hdrs := ('Additional message', 'EASINcode', 'Measure row ID', 'Element name')
    let $element_name := 'species'
    let $conditionElement := 'subject_management_measures'

    return scripts:checkImpactedSpecies($refcode, $rulename, $species_seq,
        $level2_seq, $level3_seq, $type, $hdrs, $element_name, $conditionElement)
};

(:
    A55
:)

declare function scripts:checkA55(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabHDspecies
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:protectedSpecies/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Protected species row ID','Habitats Directive Annex II, IV or V species')
    let $conditionElement := ''

    return scripts:checkCodeListL2($refcode, $rulename, $species_seq, $level2_seq,
        $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A56
:)

declare function scripts:checkA56(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabHabitats
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:protectedHabitats/*:Row
    let $element_name := 'code'
    let $hdrs := ('EASINcode', 'Habitats row ID','Habitats Directive Annex I habitat type')
    let $conditionElement := ''

    return scripts:checkCodeListL2($refcode, $rulename, $species_seq, $level2_seq,
        $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

(:
    A58
:)

declare function scripts:checkA58(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codes := $scripts:codesEcosystems
    let $species_seq := $root//*:sectionASpecies/*:Row
    let $level2_seq := $root//*:ecosystems/*:Row
    let $hdrs := ('EASINcode', 'Row ID', 'Group name', 'Class name')

    let $data :=
        for $species in $species_seq
            let $species_row_id := $species/*:row_id
            let $EASINcode := $species/*:EASINCode

            for $l2 in $level2_seq
                let $parent_row_id := functx:substring-before-if-contains(
                    $l2/*:parent_row_id, '_'
                )
                where $parent_row_id = $species_row_id

                let $group := $l2/*:group/data() => functx:if-empty(' ')
                let $class := $l2/*:class/data() => functx:if-empty(' ')
                let $groupOK :=
                    if ($group = ' ')
                    then true()
                    else $codes//element[class = $class]/group = $group
                        and $group = $codes//element/group
                let $classOK :=
                    if ($class = ' ')
                    then true()
                    else $codes//element[group = $group]/class = $class
                        and $class = $codes//element/class

                where not($groupOK and $classOK)
                let $row_id := $l2/*:row_id
                let $d := (
                    $EASINcode,
                    $row_id,
                    $group,
                    $class
                )

                return scripts:createData((1), (3, 4), $d)

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    B1
:)

declare function scripts:checkB1(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $hdrs := ('National list of IAS of Member State concern established?')

    let $data :=
        let $value := $root//*:reporting//*:has_national_list_MS
            => functx:if-empty('-')

        return
        if(not($value = ('true', 'false')))
        then
            let $d := ($value)
            return scripts:createData((1), (1), $d)
        else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    B2
:)
declare function scripts:checkB2_old(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionBSpecies/*:Row
    let $countryCode := scripts:getCountryCode($root)

    let $data :=
        for $species in $seq
            let $EASINCode := $species/*:EASINCode => functx:if-empty('')
            let $scientific_name := $species/*:scientific_name
                 => functx:if-empty('') => normalize-space() => functx:trim()

            where not($scientific_name = '')

            let $scientific_name_CustomList := $scripts:nationalListCustom
                //row[*:SpeciesCode = $EASINCode and *:country = $countryCode]/MSscientificName
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($scientific_name_CustomList = $scientific_name)

            let $scientific_name_speciesB := $scripts:speciesB
                //row[*:R_ID = $EASINCode]/NAME
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($scientific_name_speciesB = $scientific_name)

            let $d := ($EASINCode, $scientific_name)
            return scripts:createData((1), (2), $d)

    let $hdrs := ('EASIN Code', 'Scientific name')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

declare function scripts:checkB2(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionBSpecies/*:Row
    let $hasList := $root//*:reporting//*:has_national_list_MS
            => functx:if-empty('-')
    let $isMandatory := $hasList = 'true'

    let $data :=
        if($isMandatory and count($seq) = 0)
        then
            let $d := ('No species name reported', '-', '-', '-')
            return scripts:createData((1), (4), $d)
        else
        for $species in $seq
            let $scientific_name := $species/*:scientific_name => functx:if-empty('')

            where $isMandatory and not(fn:matches($scientific_name, '[a-zA-Z]'))
            let $EASINCode := $species/*:EASINCode => functx:if-empty('')
            let $row_id := $species/*:row_id

            let $d := ('Invalid name', $EASINCode, $row_id, $scientific_name)
            return scripts:createData((1), (4), $d)

    let $hdrs := ('Additional info', 'EASIN Code', 'Row ID', 'Scientific name')
    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:~
    B3
:)
declare function scripts:checkB3(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $seq := $root//*:sectionBSpecies/*:Row
    let $countryCode := scripts:getCountryCode($root)
    let $codeListUrl := $scripts:vocabCountries
    let $validConcepts := scripts:getValidConcepts($codeListUrl)

    let $data1 :=
        for $species in $seq
            let $EASINCode := $species/*:EASINCode => functx:if-empty(' ')
            let $scientific_name := $species/*:scientific_name/text()
            let $common_name_national := $species/*:common_name_national
                 => functx:if-empty('') => normalize-space() => functx:trim()

            (:where not($common_name_national = ''):)

            let $commonName_fromlist := $scripts:nationalListCustom
                //row[*:SpeciesCode = $EASINCode and *:country = $countryCode]/cName
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($common_name_national = $commonName_fromlist)
                or $EASINCode = ' '
            where scripts:isValidCommonName($common_name_national)
            where scripts:isCountryValid($common_name_national, $validConcepts) = true()

            let $d := ($EASINCode, $scientific_name, $common_name_national)
            return scripts:createData((1), (3), $d)

    let $data2 :=
        for $species in $seq
            let $EASINCode := $species/*:EASINCode => functx:if-empty(' ')
            let $scientific_name := $species/*:scientific_name/text()
            let $common_name_national := $species/*:common_name_national
                 => functx:if-empty('') => normalize-space() => functx:trim()

            let $commonName_fromlist := $scripts:nationalListCustom
                //row[*:SpeciesCode = $EASINCode and *:country = $countryCode]/cName
                    => functx:if-empty('') => normalize-space() => functx:trim()

            where not($common_name_national = $commonName_fromlist)
                or $EASINCode = ' '
            where not(scripts:isValidCommonName($common_name_national)
                and scripts:isCountryValid($common_name_national, $validConcepts) = true())

            let $d := ($EASINCode, $scientific_name, $common_name_national)
            return scripts:createData((1), (3), $d)

    let $hdrs := ('EASIN Code', 'Scientific name', 'Common name')
    let $details :=
        <div class="ias">{
            if (empty($data1)) then () else scripts:getDetails($refcode, "info", $hdrs, $data1),
            if (empty($data2)) then () else scripts:getDetails($refcode, "error", $hdrs, $data2)
        }</div>

    return
        scripts:renderResult2($refcode, $rulename, 'error', 'info', count($data2), count($data1), $details)
};


(:
    B4
:)

declare function scripts:checkB4(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $seq := $root//*:sectionBSpecies/*:Row
    let $hdrs := ('EASINcode', 'Present in MS')
    let $has_national_list_MS := $root//*:reporting//*:has_national_list_MS
            => functx:if-empty('')

    return scripts:checkSpeciesPresence($refcode, $rulename, $root,
                $type, $seq, $hdrs, $has_national_list_MS)
};

(:~
    B5b
:)
declare function scripts:checkB5b(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $seq := $root//*:sectionBSpecies/*:Row
    let $conditionElement := ''

    return scripts:checkReproductionPatterns(
            $refcode, $rulename, $type, $seq, $conditionElement)
};

(:~
    B5c
:)
declare function scripts:checkB5c(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $seq := $root//*:sectionBSpecies/*:Row
    let $section := 'B'
    let $conditionalElement := ''

    return scripts:checkSpreadPatterns($refcode, $rulename, $root,
        $type, $seq, $section, $conditionalElement)
};

(:~
    B6
:)

declare function scripts:checkB6(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $codeListUrl := $scripts:vocabMeasures
    let $species_seq := $root//*:sectionBSpecies/*:Row
    let $level2_seq := $root//*:sectionBMeasures/*:Row
    let $element_name := 'measure'
    let $hdrs := ('EASINcode', 'Measure row ID', 'Measure')
    let $conditionElement := ''

    return scripts:checkCodeListL2($refcode, $rulename, $species_seq, $level2_seq,
        $type, $element_name, $codeListUrl, $hdrs, $conditionElement)
};

declare function scripts:checkUriExists(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element(),
        $type as xs:string,
        $hdrs as xs:string+,
        $element_name as xs:string,
        $isMandatory as xs:string
) as element()* {
    let $element_name_file := concat('file_', $element_name)

    let $data :=
        let $value := $root//*:sectionC//*[local-name() = $element_name]
            => functx:if-empty('-')
        let $value_file := $root//*:sectionC//*[local-name() = $element_name_file]
            => functx:if-empty('-')

        where not($value = '-') or $isMandatory = 'true'

        return
            if(functx:contains-any-of($value, ('http', 'www')))
            then
                let $response :=
                    try {
                        http:send-request(
                            <http:request method='get' status-only='true' timeout='10'/>, $value)
                    }
                    catch * {
                        <http:response status="404"/>
                    }
                return
                if (not($response/@*:status = 200))
                then
                    let $d := ($value)
                    return scripts:createData((1), (1), $d)
                else ()
            else
                if($value = '-' and $value_file = '-')
                then
                    let $d := ($value)
                    return scripts:createData((1), (1), $d)
                else ()

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)

};

(:
    C1
:)

declare function scripts:checkC1(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'weblink_permits'
    let $hdrs := ('Link to information - Art. 8(7)')
    let $value := $root//*:sectionC//*[local-name() = $element_name]
        => functx:if-empty('')

    return if($value = '')
    then
        let $type := 'error'
        let $data := scripts:createData((1), (1), ('-'))
        let $details := scripts:getDetails($refcode, $type, $hdrs, $data)
        return
            scripts:renderResult($refcode, $rulename, $type, count($data), $details)

    else
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'false')
};

(:
    C2
:)

declare function scripts:checkC2(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'action_plans'
    let $element_name_file := concat('file_', $element_name)
    let $hdrs := ('Documents describing action plans - Art. 13(2)')
    let $value := $root//*:sectionC//*[local-name() = $element_name]
        => functx:if-empty('')
    let $value_file := $root//*:sectionC//*[local-name() = $element_name_file]
        => functx:if-empty('')

    return if($value = '' and $value_file = '')
    then
        let $type := 'info'
        let $data := scripts:createData((1), (1), ('-'))
        let $details := scripts:getDetails($refcode, $type, $hdrs, $data)
        return
            scripts:renderResult($refcode, $rulename, $type, count($data), $details)

    else
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'false')
};

(:
    C3a
:)
declare function scripts:checkC3a(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'blocker'
    let $codeListUrl := $scripts:vocabPathways
    let $level1_seq := $root//*:priorityPathway/*:Row
    let $element_name := 'pathway_code'
    let $hdrs := ('Additional info', 'Row id', 'Pathway')
    let $msgInvalid := 'Invalid code'
    let $msgDuplicate := 'Duplicate code'

    let $validConcepts := scripts:getValidConcepts($codeListUrl)
    let $validNotations := scripts:getValidNotations($codeListUrl)

    let $data1 :=
        for $node in $level1_seq
            let $row_id := $node/*:row_id
            let $code := $node/*[local-name() = $element_name]
            where not($code = $validConcepts or $code = $validNotations)
            let $d := ($msgInvalid, string($row_id), $code)

            return scripts:createData((1), (2), $d)

    let $data2 :=
        for $node at $ind in $level1_seq
            let $row_id := $node/*:row_id
            let $code := $node/*[local-name() = $element_name]
            let $count := count(index-of($level1_seq[*:row_id ne $row_id]/*:pathway_code, $code))
            where $count > 0 and not($code = subsequence($level1_seq[*:row_id = $row_id]/*:pathway_code, $ind + 1))
            let $d := ($msgDuplicate, string($row_id), $code)

            return scripts:createData((1), (3), $d)
    let $data2 := $data2

    let $details :=
        <div class="ias">{
            if (empty($data1)) then () else scripts:getDetails($refcode, $type, $hdrs, $data1),
            if (empty($data2)) then () else scripts:getDetails($refcode, $type, $hdrs, $data2)
        }</div>

    (:let $details := scripts:getDetails($refcode, $type, $hdrs, $data):)

    return
        scripts:renderResult($refcode, $rulename, $type, count(($data1, $data2)), $details)
    (:return scripts:checkCodeListL1($refcode, $rulename, $level1_seq,:)
        (:$type, $element_name, $codeListUrl, $hdrs ):)
};

(:
    C3b
:)
declare function scripts:checkC3b(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $type := 'error'
    let $level1_seq := $root//*:priorityPathway/*:Row
    let $element_name := 'EASINCode'
    let $hdrs := ('Row id', 'EASINCode')

    let $data :=
        for $node in $level1_seq
            let $row_id := $node/*:row_id
            let $code := $node/*[local-name() = $element_name]
            where not($code = $scripts:EASINcodes)
            let $d := (string($row_id), $code)

            return scripts:createData((1), (2), $d)

    let $details := scripts:getDetails($refcode, $type, $hdrs, $data)

    return
        scripts:renderResult($refcode, $rulename, $type, count($data), $details)
};

(:
    C4
:)

declare function scripts:checkC4(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'surveillance_system'
    let $hdrs := ('Documents describing surveillance system - Art. 14')

    return
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'true')
};

(:
    C5
:)

declare function scripts:checkC5(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'official_control_system'
    let $hdrs := ('Documents describing official control system - Art. 15')

    return
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'true')
};

(:
    C6
:)

declare function scripts:checkC6(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'measures_inform_public'
    let $hdrs := ('Documents describing measures taken to inform the public')

    return
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'true')
};

(:
    C7
:)

declare function scripts:checkC7(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'cost_of_action'
    let $hdrs := ('Documents describing cost of actions')

    return
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'true')
};

(:
    C8
:)

declare function scripts:checkC8(
        $refcode as xs:string,
        $rulename as xs:string,
        $root as element()
) as element()* {
    let $element_name := 'additional_information'
    let $hdrs := ('Document with additional information')

    return
        scripts:checkUriExists($refcode, $rulename, $root, 'info',
            $hdrs, $element_name, 'false')
};
