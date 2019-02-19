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
            ias:failsafeWrapper("G2", "0.2 - Reporting period start", $root, scripts:checkG2#3),
            ias:failsafeWrapper("G3", "0.2 - Reporting period end", $root, scripts:checkG3#3)
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
            ias:failsafeWrapper("A1", "Question 1 - Scientific name", $root, scripts:checkA1#3),
            ias:failsafeWrapper("A2", "Question 1 - EASIN Id", $root, scripts:checkA2#3),
            ias:failsafeWrapper("A3", "Question 2 - Common name", $root, scripts:checkA3#3),
            ias:failsafeWrapper("A4", "Question 3 - Presence", $root, scripts:checkA4#3),
            ias:failsafeWrapper("A5", "Question 4 - Reproduction patterns", $root, scripts:checkA5#3),
            ias:failsafeWrapper("A6", "Question 4 - Spread patterns", $root, scripts:checkA6#3),
            ias:failsafeWrapper("A8",
                    "Question 5 - additional information on species, distribution, spread and reproduction patterns",
                    $root, scripts:checkA8#3),

            ias:failsafeWrapper("A9", "Question 7 - Information on permits, Year", $root, scripts:checkA9#3),
            ias:failsafeWrapper("A10", "Question 7 - Information on permits, Purpose of permit", $root, scripts:checkA10#3),
            ias:failsafeWrapper("A11", "Question 7 - Information on permits, Number of permits", $root, scripts:checkA11#3),
            ias:failsafeWrapper("A12", "Question 7 - Information on permits, Total number or volume", $root, scripts:checkA12#3),
            ias:failsafeWrapper("A13", "Question 7 - Information on permits, Unit", $root, scripts:checkA13#3),

            ias:failsafeWrapper("A15", "Question 9 – information on inspections, Year", $root, scripts:checkA15#3),
            ias:failsafeWrapper("A16", "Question 9 – information on inspections, Purpose of permit", $root, scripts:checkA16#3),
            ias:failsafeWrapper("A17", "Question 9 – information on inspections, Number of establishments", $root, scripts:checkA17#3),
            ias:failsafeWrapper("A18",
                    "Question 9 – information on inspections, Number of volume of permitted specimens corresponding to permits",
                    $root, scripts:checkA18#3),
            ias:failsafeWrapper("A19", "Question 9 – information on inspections, Unit", $root, scripts:checkA19#3),
            ias:failsafeWrapper("A20", "Question 9 – information on inspections, Number of inspected establishments", $root, scripts:checkA20#3),
            ias:failsafeWrapper("A21",
                    "Question 9 – information on inspections, Number or volumen of permitted specimens corresponding to permits held by establishments",
                    $root, scripts:checkA21#3),
            ias:failsafeWrapper("A22", "Question 9 – information on inspections, Unit", $root, scripts:checkA22#3),

            ias:failsafeWrapper("A24", "Question 11 – rapid eradication measures , Rapid eradication measures executed", $root, scripts:checkA24#3),
            ias:failsafeWrapper("A59", "Question 12 – rapid eradication measures – impacted non-targeted species, PopulationId", $root, scripts:checkA59#3),
            ias:failsafeWrapper("A25", "Question 12 – rapid eradication measures – impacted non-targeted species, Starting date", $root, scripts:checkA25#3),
            ias:failsafeWrapper("A26", "Question 12 – rapid eradication measures – impacted non-targeted species, End date", $root, scripts:checkA26#3),
            ias:failsafeWrapper("A29", "Question 12 – rapid eradication measures – impacted non-targeted species, Administrative unit - NUTS", $root, scripts:checkA29#3),
            ias:failsafeWrapper("A30", "Question 12 – rapid eradication measures – impacted non-targeted species, Biogeograpical region", $root, scripts:checkA30#3),
            ias:failsafeWrapper("A31", "Question 12 – rapid eradication measures – impacted non-targeted species, River basin sub-unit", $root, scripts:notYet#3),
            ias:failsafeWrapper("A32", "Question 12 – rapid eradication measures – impacted non-targeted species, Marine sub-region", $root, scripts:checkA32#3),
            ias:failsafeWrapper("A35", "Question 12 – rapid eradication measures – impacted non-targeted species, Methods used", $root, scripts:checkA35#3),
            ias:failsafeWrapper("A36", "Question 12 – rapid eradication measures – impacted non-targeted species, Impacted non-targeted species", $root, scripts:notYet#3),
            ias:failsafeWrapper("A37", "Question 12 – rapid eradication measures – impacted non-targeted species, Impact of the measure(s) per non-targeted species", $root, scripts:notYet#3),

            ias:failsafeWrapper("A39", "Question 14 – management measures", $root, scripts:checkA39#3),
            ias:failsafeWrapper("A60", "Question 14 – management measures, Population Id", $root, scripts:checkA60#3),
            ias:failsafeWrapper("A40", "Question 15 – management measures, Population Id, Start date", $root, scripts:checkA40#3),
            ias:failsafeWrapper("A41", "Question 15 – management measures, Population Id, End date", $root, scripts:checkA41#3)
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
            ias:failsafeWrapper("B1", "Question 1 - National list established yes/no", $root, scripts:notYet#3),
            ias:failsafeWrapper("B2", "Question 2 - Scientific name", $root, scripts:notYet#3)
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
            ias:failsafeWrapper("C1", "Question 1 – Link to information - Art. 8(7)", $root, scripts:notYet#3),
            ias:failsafeWrapper("C2", "Question 2 – documents describing action plans – Art. 13(2)", $root, scripts:notYet#3)
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
