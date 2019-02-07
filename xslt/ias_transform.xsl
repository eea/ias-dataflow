<xsl:stylesheet xpath-default-namespace="http://dd.eionet.europa.eu/namespaces/884"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:xs="http://www.w3.org/2001/XMLSchema"
        xmlns:local="http://local"
        version="2.0" exclude-result-prefixes="xml">

    <xsl:variable name="labels" select="document('ias_labels.xml')/root"/>

    <xsl:variable name="measurement_units" select="$labels/measurement_units"/>

    <xsl:function name="local:get_label" as="xs:string">
        <xsl:param name="value"/>
        <xsl:param name="options"/>
        <xsl:value-of select="$options/element[value = $value]/text/text()"/>
    </xsl:function>

    <xsl:function name="local:if-empty" as="xs:string">
        <xsl:param name="value"/>
        <xsl:param name="alternate"/>

        <xsl:choose>
            <xsl:when test="string-length($value) > 0">
                <xsl:value-of select="$value"/>
            </xsl:when>
            <xsl:otherwise>-</xsl:otherwise>
        </xsl:choose>
    </xsl:function>

    <xsl:template match="/">
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="./xsl-style.css"/>
            </head>
            <body>
                <div id="container">
                    <xsl:call-template name="tab_0"/>
                    <xsl:call-template name="tab_1"/>
                    <!--<xsl:call-template name="tab_2"/>-->
                    <!--<xsl:call-template name="tab_3"/>-->
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template name="tab_0">
        <xsl:variable name="root" select="./*[1]"/>
        <xsl:variable name="reporting_party" select="$root//reporting"/>

        <h2>Information on the reporting party</h2>
        <div class="form-section">
            <div class="fs-container fs-title">
                <xsl:for-each select="$labels/tab_0/description">
                    <div class="newline-separated">
                        <xsl:value-of select="."/>
                    </div>
                </xsl:for-each>
            </div>
            <div class="fs-container fs-data">
                <table class="bilateral bordered">
                    <xsl:for-each select="$labels/tab_0/form_fields/*">
                        <tr>
                            <th>
                                <xsl:value-of select="./label"/>
                            </th>
                            <td>
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="label" select="''"/>
                                    <xsl:with-param name="value" select="$reporting_party/Row/*[local-name() = current()/name]"/>
                                </xsl:call-template>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </div>
        </div>
    </xsl:template>

    <xsl:template name="tab_1">
        <xsl:variable name="tab1" select="$labels/tab_1"/>
        <xsl:variable name="fields" select="$tab1/fields"/>
        <xsl:variable name="sectionASpecies" select="//*:sectionASpecies"/>
        <xsl:variable name="spreadPatterns" select="//*:spreadPatterns"/>
        <xsl:variable name="table" select="$tab1"/>

        <h2>
            Information to be submitted for each of the invasive alien species of Union concern and for each invasive alien species of regional concern subject to measures as provided for in Article 11(2) of Regulation (EU) No 1143/2014
        </h2>
        <!--<div class="sub-title">Sub title</div>-->

        <div class="form-section">
            <table class="table-measures">
                <div class="fs-container fs-title">
                    <xsl:value-of select="$tab1/description"/>
                </div>
                <xsl:for-each select="$tab1/species/element">
                    <xsl:variable name="species" select="current()"/>
                    <xsl:variable name="species_title" select="$species/speciesNameLegi/text()"/>
                    <xsl:variable name="optional" select="$species/optional"/>
                    <xsl:variable name="EASINCode" select="$species/speciesCode"/>
                    <xsl:variable name="report-node" select="$sectionASpecies/*:Row[*:EASINCode = $EASINCode]"/>
                    <xsl:variable name="row_id" select="$report-node/*:row_id"/>
                    <xsl:variable name="present_in_MS" select="$report-node/*:present_in_MS"/>

                    <tr>
                    <td class="bordered">
                        <!-- debug -->
                        <div>EASINCode: <xsl:value-of select="$EASINCode"/></div>
                        <div>row_id: <xsl:value-of select="$row_id"/></div>
                        <!--<div>options: <xsl:value-of select="$options-label"/></div>-->

                        <div class="fs-container article-title">
                            <xsl:if test="$optional = 'true'">
                                <span class="optional">Optional: </span>
                            </xsl:if>
                            <xsl:value-of select="$species_title"/>
                            <span class="right">
                                <span><xsl:value-of select="$fields/species_code/label"/></span>:
                                <xsl:value-of select="$species/speciesCode"/>
                            </span>
                        </div>
                        <!-- debug -->
                        <!--<xsl:value-of select="$collection_id"/> - <xsl:value-of select="$parent_collection_id"/>-->

                        <div class="fs-container fs-data">
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$fields/common_name/label"/>
                                <xsl:with-param name="value" select="$species/speciesCNameEN"/>
                            </xsl:call-template>

                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$fields/common_name/labelLanguage"/>
                                <xsl:with-param name="value" select="$report-node/*:common_name_national"/>
                            </xsl:call-template>

                            <xsl:call-template name="choose-print">
                                <xsl:with-param name="options" select="$fields/mandatory_item/options"/>
                                <xsl:with-param name="label" select="$fields/mandatory_item/label"/>
                                <xsl:with-param name="value" select="$present_in_MS"/>
                            </xsl:call-template>
                        </div>
                        <xsl:if test="$present_in_MS = 'true'">
                            <div class="fs-container fs-data">
                                <xsl:call-template name="choose-print">
                                    <xsl:with-param name="options" select="$fields/depending_on_mandatory/reproduction_patterns/element/options"/>
                                    <xsl:with-param name="label" select="$fields/depending_on_mandatory/reproduction_patterns/element/label"/>
                                    <xsl:with-param name="value" select="$report-node/*:reproduction_pattern"/>
                                </xsl:call-template>
                                <xsl:call-template name="multichoose-print">
                                    <xsl:with-param name="options" select="$fields/depending_on_mandatory/spread_patterns/element/options"/>
                                    <xsl:with-param name="label" select="$fields/depending_on_mandatory/spread_patterns/element/label"/>
                                    <xsl:with-param name="values" select="$spreadPatterns/*:Row[*:EASINCode = $EASINCode]/*:spread_pattern"/>
                                </xsl:call-template>
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="label" select="$fields/additional_info/label"/>
                                    <xsl:with-param name="value" select="$report-node/*:additional_information"/>
                                </xsl:call-template>
                            </div>
                        </xsl:if>

                        <xsl:call-template name="tab_1_table1">
                            <xsl:with-param name="report-node" select="$report-node"/>
                        </xsl:call-template>

                        <xsl:call-template name="tab_1_table2">
                            <xsl:with-param name="report-node" select="$report-node"/>
                            <xsl:with-param name="table" select="$labels/tab_1/tables/table_2"/>
                        </xsl:call-template>

                        <xsl:call-template name="tab_1_table3">
                            <xsl:with-param name="report-node" select="$report-node"/>
                            <xsl:with-param name="table" select="$labels/tab_1/tables/table_3"/>
                        </xsl:call-template>

                        <xsl:call-template name="tab_1_table4">
                            <xsl:with-param name="report-node" select="$report-node"/>
                            <xsl:with-param name="table" select="$labels/tab_1/tables/table_4"/>
                        </xsl:call-template>

                        <!-- NOT USED -->
                        <xsl:for-each select="$species/items/element">
                            <xsl:variable name="type" select="current()/type"/>
                            <xsl:variable name="node_name" select="current()/name"/>
                            <xsl:choose>
                                <xsl:when test="$type = ('checkbox')">
                                    <xsl:call-template name="checkbox-print">
                                        <xsl:with-param name="options" select="()"/>
                                        <xsl:with-param name="label" select="current()/label"/>
                                        <xsl:with-param name="report-data-node" select="''"/>
                                    </xsl:call-template>
                                </xsl:when>
                                <xsl:when test="$type = ('changes', 'status')">
                                    <xsl:call-template name="choose-print">
                                        <xsl:with-param name="options" select="()"/>
                                        <xsl:with-param name="label" select="current()/label"/>
                                        <xsl:with-param name="value" select="''"/>
                                    </xsl:call-template>
                                </xsl:when>
                                <xsl:when test="$type = ('number')">
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="current()/label"/>
                                        <xsl:with-param name="value" select="''"/>
                                    </xsl:call-template>
                                </xsl:when>
                            </xsl:choose>
                        </xsl:for-each>
                    </td>
                    </tr>
                </xsl:for-each>
            </table>
        </div>
    </xsl:template>

    <xsl:template name="tab_1_table1">
        <xsl:param name="report-node"/>

        <xsl:variable name="parent_row_id" select="$report-node/*:row_id"/>
        <xsl:variable name="table1" select="$labels/tab_1/tables/table_1"/>
        <xsl:variable name="permits_issued" select="$report-node/*:permits_issued"/>
        <xsl:variable name="permitedSpecimens" select="$report-node/ancestor::IAS/*:permitedSpecimens"/>

        <div class="fs-container fs-data">
            <div class="article-title title">
                <xsl:value-of select="$table1/label"/>
            </div>
            <xsl:call-template name="choose-print">
                <xsl:with-param name="options" select="$table1/question/options"/>
                <xsl:with-param name="label" select="$table1/question/label"/>
                <xsl:with-param name="value" select="$permits_issued"/>
            </xsl:call-template>

            <xsl:if test="$permits_issued = 'true'">
                <xsl:for-each select="$table1/table_sections/element">
                    <xsl:variable name="section" select="current()"/>
                    <xsl:variable name="permits-node-name" select="current()/permits_node"/>
                    <xsl:variable name="permits-nodes" select="$report-node/ancestor::IAS/*[local-name() = $permits-node-name]/*:Row[*:parent_row_id = $parent_row_id]"/>

                    <xsl:if test="string-length($section/label) > 0">
                        <div class="title">
                            <xsl:value-of select="$section/label"/>
                        </div>
                    </xsl:if>
                    <div class="fs-container bordered">
                        <xsl:for-each select="$permits-nodes">
                            <div class="line-separated">
                                <xsl:variable name="permits-node" select="current()"/>
                                <xsl:variable name="row_id" select="$permits-node/*:row_id"/>
                                <!-- debug -->
                                <div>parent_row_id: <xsl:value-of select="$parent_row_id"/></div>
                                <div>row_id: <xsl:value-of select="$row_id"/></div>

                                <xsl:for-each select="$section/table_fields/optionsFields/element[1]/fields/element">
                                    <xsl:variable name="field" select="current()"/>
                                    <xsl:variable name="name" select="$field/name"/>
                                    <xsl:variable name="permit_type" select="$field/permit_type"/>
                                    <xsl:variable name="inspection_status" select="$field/inspection_status"/>

                                    <!-- debug -->
                                    <!--<xsl:value-of select="$permit_type"/>-->

                                    <xsl:choose>
                                        <xsl:when test="$name = 'year'">
                                            <xsl:call-template name="simple-print">
                                                <xsl:with-param name="label" select="$field/label"/>
                                                <xsl:with-param name="value" select="$permits-node/*[local-name() = $name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$name = ('number_issued', 'number_valid', 'number_establishment', 'number_inspected')">
                                            <xsl:call-template name="simple-print">
                                                <xsl:with-param name="label" select="$field/label"/>
                                                <xsl:with-param name="value" select="$permits-node/*[local-name() = $name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="$name = ('permit_purpose')">
                                            <xsl:call-template name="choose-print">
                                                <xsl:with-param name="options" select="$field/options"/>
                                                <xsl:with-param name="label" select="$field/label"/>
                                                <xsl:with-param name="value" select="$permits-node/*[local-name() = $name]"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="string-length($permit_type) > 0">
                                            <xsl:call-template name="list-print">
                                                <xsl:with-param name="label" select="$field/label"/>
                                                <xsl:with-param name="values" select="$permitedSpecimens/*:Row[*:parent_row_id = $row_id and string-length(*:value) > 0
                                                    and *:permit_type = $permit_type]/concat(*:value, ' ', local:get_label(*:unit, $measurement_units/descendant-or-self::options))"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:when test="string-length($inspection_status) > 0">
                                            <xsl:call-template name="list-print">
                                                <xsl:with-param name="label" select="$field/label"/>
                                                <xsl:with-param name="values" select="$permitedSpecimens/*:Row[*:parent_row_id = $row_id and string-length(*:value) > 0
                                                    and *:inspection_status = $inspection_status]/concat(*:value, ' ', local:get_label(*:unit, $measurement_units/descendant-or-self::options))"/>
                                            </xsl:call-template>
                                        </xsl:when>
                                        <xsl:otherwise>
                                            <xsl:call-template name="simple-print">
                                                <xsl:with-param name="label" select="$field/label"/>
                                                <xsl:with-param name="value" select="'#unknown'"/>
                                            </xsl:call-template>
                                        </xsl:otherwise>
                                    </xsl:choose>
                                </xsl:for-each>
                            </div>
                        </xsl:for-each>
                        <xsl:if test="exists($section/noinspections)">
                            <div class="line-separated">
                                <xsl:call-template name="simple-print">
                                    <xsl:with-param name="label" select="$section/noinspections/options/element/text"/>
                                    <xsl:with-param name="value">
                                        <xsl:choose>
                                            <xsl:when test="$report-node/*:no_inspections_reported = 'true'">Yes</xsl:when>
                                            <!--<xsl:when test="$report-node/*:no_inspections_reported = 'false'">No</xsl:when>-->
                                            <xsl:otherwise>-</xsl:otherwise>
                                        </xsl:choose>
                                    </xsl:with-param>
                                </xsl:call-template>
                            </div>
                        </xsl:if>
                        <div class="line-separated">
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$section/additional_info/label"/>
                                <xsl:with-param name="value" select="$report-node/*[local-name() = $section/additional_info/name]"/>
                            </xsl:call-template>
                        </div>
                    </div>
                </xsl:for-each>
            </xsl:if>
        </div>
    </xsl:template>

    <xsl:template name="tab_1_table2">
        <xsl:param name="report-node"/>
        <xsl:param name="table"/>

        <xsl:variable name="species_id" select="$report-node/*:row_id"/>
        <xsl:variable name="eradication_measures" select="$report-node/*:eradication_measures"/>
        <xsl:variable name="sectionAMeasures" select="$report-node/ancestor::IAS/*:sectionAMeasures
            /*:Row[*:measure_type/text() = 'eradication' and *:parent_row_id = $species_id]"/>
        <xsl:variable name="section" select="$table/table_sections/element"/>
        <xsl:variable name="fields" select="$section/table_fields/fields"/>
        <xsl:variable name="observedNegativeImpacts" select="$report-node/ancestor::IAS/*:observedNegativeImpacts"/>

        <div class="fs-container fs-data">
            <div class="article-title title">
                <xsl:value-of select="$table/label"/>
            </div>
            <xsl:call-template name="choose-print">
                <xsl:with-param name="options" select="$table/question/options"/>
                <xsl:with-param name="label" select="$table/question/label"/>
                <xsl:with-param name="value" select="$eradication_measures"/>
            </xsl:call-template>
            <xsl:if test="$eradication_measures = 'true'">
                <div class="fs-container bordered">
                    <!-- Debug -->
                    <div>species_id: <xsl:value-of select="$species_id"/></div>

                    <xsl:for-each select="$sectionAMeasures">
                        <xsl:variable name="sectionA-node" select="current()"/>
                        <xsl:variable name="measure_id" select="$sectionA-node/*:row_id"/>
                        <div class="line-separated">
                            <!-- debug -->
                            <div>measure_id: <xsl:value-of select="$measure_id"/></div>

                            <!-- Population -->
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="'Population'"/>
                                <xsl:with-param name="value" select="$sectionA-node/*:population_name"/>
                            </xsl:call-template>

                            <!-- Measures-->
                            <span class="optional title">Measure(s)</span>
                            <xsl:for-each select="$fields/element[1]/fields/element">
                                <xsl:variable name="field" select="current()"/>
                                <xsl:variable name="type" select="$field/type"/>
                                <xsl:variable name="name" select="$field/name"/>
                                <xsl:variable name="data-rows" select="$report-node/ancestor::IAS/*[local-name() = $name]
                                    /*:Row[*:parent_row_id = $measure_id]"/>

                                <!-- TODO not finished -->
                                <xsl:choose>
                                    <xsl:when test="$type = ('date')">
                                        <xsl:call-template name="simple-print">
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="value" select="$sectionA-node/*[local-name() = $name]"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:when test="$type = ('multiselect')">
                                        <xsl:call-template name="multichoose-print">
                                            <xsl:with-param name="options" select="$field/options"/>
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="values" select="$data-rows/*:methods_used"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:when test="$type = ('listprint')">
                                        <xsl:call-template name="list-print">
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="values" select="$data-rows/*:name"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:call-template name="simple-print">
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="value" select="'#unknown'"/>
                                        </xsl:call-template>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:for-each>

                            <!-- Effectiveness of measure -->
                            <span class="optional title">
                                <xsl:value-of select="$fields/element[2]/label"/>
                            </span>
                            <xsl:call-template name="choose-print">
                                <xsl:with-param name="options" select="$fields/element[2]/fields/element/options"/>
                                <xsl:with-param name="label" select="''"/>
                                <xsl:with-param name="value" select="$sectionA-node/*:measure_effectiveness"/>
                            </xsl:call-template>

                            <!-- TODO do it later -->
                            <!-- Observed negative impacts of the measure on non-targeted species -->
                            <xsl:call-template name="list-print">
                                <xsl:with-param name="label" select="$fields/element[3]/main_header"/>
                                <xsl:with-param name="values" select="$observedNegativeImpacts/*:Row[*:parent_row_id = $measure_id]
                                /concat('Impacted non-targeted species: ', local:if-empty(*:non_targeted_species, '-'), ' / Impact per species: ', local:if-empty(*:species, '-'))"/>
                            </xsl:call-template>

                            <!-- No inspections reported -->
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$fields/element[4]/options/element/text"/>
                                <xsl:with-param name="value">
                                    <xsl:choose>
                                        <xsl:when test="$sectionA-node/*:no_negative_impact = 'true'">Yes</xsl:when>
                                        <!--<xsl:when test="$report-node/*:no_inspections_reported = 'false'">No</xsl:when>-->
                                        <xsl:otherwise>-</xsl:otherwise>
                                    </xsl:choose>
                                </xsl:with-param>
                            </xsl:call-template>

                            <!-- additional info -->
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$section/additional_info/label"/>
                                <xsl:with-param name="value" select="$sectionA-node/*:additional_information"/>
                            </xsl:call-template>
                        </div>
                    </xsl:for-each>
                </div>
            </xsl:if>
        </div>
    </xsl:template>

    <xsl:template name="tab_1_table3">
        <xsl:param name="report-node"/>
        <xsl:param name="table"/>

        <xsl:variable name="species_id" select="$report-node/*:row_id"/>
        <xsl:variable name="subject_management_measures" select="$report-node/*:subject_management_measures"/>
        <xsl:variable name="sectionAMeasures" select="$report-node/ancestor::IAS/*:sectionAMeasures
            /*:Row[*:measure_type/text() = 'management' and *:parent_row_id = $species_id]"/>
        <xsl:variable name="section" select="$table/table_sections/element"/>
        <xsl:variable name="fields" select="$section/table_fields/fields"/>
        <xsl:variable name="observedNegativeImpacts" select="$report-node/ancestor::IAS/*:observedNegativeImpacts"/>

        <div class="fs-container fs-data">
            <div class="article-title title">
                <xsl:value-of select="$table/label"/>
            </div>
            <xsl:call-template name="choose-print">
                <xsl:with-param name="options" select="$table/question/options"/>
                <xsl:with-param name="label" select="$table/question/label"/>
                <xsl:with-param name="value" select="$subject_management_measures"/>
            </xsl:call-template>
            <xsl:if test="$subject_management_measures = 'true'">
                <div class="fs-container bordered">
                    <!-- Debug -->
                    <div>species_id: <xsl:value-of select="$species_id"/></div>

                    <xsl:for-each select="$sectionAMeasures">
                        <xsl:variable name="sectionA-node" select="current()"/>
                        <xsl:variable name="measure_id" select="$sectionA-node/*:row_id"/>
                        <div class="line-separated">
                            <!-- debug -->
                            <div>measure_id: <xsl:value-of select="$measure_id"/></div>

                            <!-- Population -->
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="'Population'"/>
                                <xsl:with-param name="value" select="$sectionA-node/*:population_name"/>
                            </xsl:call-template>

                            <!-- Measures-->
                            <span class="optional title">Measure(s)</span>
                            <xsl:for-each select="$fields/element[1]/fields/element">
                                <xsl:variable name="field" select="current()"/>
                                <xsl:variable name="type" select="$field/type"/>
                                <xsl:variable name="name" select="$field/name"/>
                                <xsl:variable name="data-rows" select="$report-node/ancestor::IAS/*[local-name() = $name]
                                    /*:Row[*:parent_row_id = $measure_id]"/>

                                <!-- TODO not finished -->
                                <xsl:choose>
                                    <xsl:when test="$type = ('date')">
                                        <xsl:call-template name="simple-print">
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="value" select="$sectionA-node/*[local-name() = $name]"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:when test="$type = ('select')">
                                        <xsl:call-template name="choose-print">
                                            <xsl:with-param name="options" select="$field/options"/>
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="value" select="$sectionA-node/*:measure_objective"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:when test="$type = ('multiselect')">
                                        <xsl:call-template name="multichoose-print">
                                            <xsl:with-param name="options" select="$field/options"/>
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="values" select="$data-rows/*:methods_used"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:when test="$type = ('listprint')">
                                        <xsl:call-template name="list-print">
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="values" select="$data-rows/*:name"/>
                                        </xsl:call-template>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:call-template name="simple-print">
                                            <xsl:with-param name="label" select="$field/label"/>
                                            <xsl:with-param name="value" select="'#unknown'"/>
                                        </xsl:call-template>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </xsl:for-each>

                            <!-- Effectiveness of measure -->
                            <span class="optional title">
                                <xsl:value-of select="$fields/element[2]/label"/>
                            </span>
                            <xsl:call-template name="choose-print">
                                <xsl:with-param name="options" select="$fields/element[2]/fields/element/options"/>
                                <xsl:with-param name="label" select="''"/>
                                <xsl:with-param name="value" select="$sectionA-node/*:measure_effectiveness"/>
                            </xsl:call-template>

                            <!-- TODO do it later -->
                            <!-- Observed negative impacts of the measure on non-targeted species -->
                            <xsl:call-template name="list-print">
                                <xsl:with-param name="label" select="$fields/element[3]/main_header"/>
                                <xsl:with-param name="values" select="$observedNegativeImpacts/*:Row[*:parent_row_id = $measure_id]
                                /concat('Impacted non-targeted species: ', local:if-empty(*:non_targeted_species, '-'), ' / Impact per species: ', local:if-empty(*:species, '-'))"/>
                            </xsl:call-template>

                            <!-- No inspections reported -->
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$fields/element[4]/options/element/text"/>
                                <xsl:with-param name="value">
                                    <xsl:choose>
                                        <xsl:when test="$sectionA-node/*:no_negative_impact = 'true'">Yes</xsl:when>
                                        <!--<xsl:when test="$report-node/*:no_inspections_reported = 'false'">No</xsl:when>-->
                                        <xsl:otherwise>-</xsl:otherwise>
                                    </xsl:choose>
                                </xsl:with-param>
                            </xsl:call-template>

                            <!-- additional info -->
                            <xsl:call-template name="simple-print">
                                <xsl:with-param name="label" select="$section/additional_info/label"/>
                                <xsl:with-param name="value" select="$sectionA-node/*:additional_information"/>
                            </xsl:call-template>
                        </div>
                    </xsl:for-each>
                </div>
            </xsl:if>
        </div>
    </xsl:template>

    <xsl:template name="tab_1_table4">
        <xsl:param name="report-node"/>
        <xsl:param name="table"/>

        <div class="fs-container fs-data">
            <div class="article-title title">
                <xsl:value-of select="$table/label"/>
            </div>
            <div class="title">
                <xsl:value-of select="$table/info"/>
            </div>
            <div class="fs-container bordered">
                <xsl:for-each select="('bla', 'haha')">
                    <div class="line-separated">
                        <xsl:for-each select="$table/table_sections/element/table_fields/element/fields/element">
                            <xsl:variable name="field" select="current()"/>
                            <xsl:variable name="type" select="$field/type"/>

                            <xsl:choose>
                                <xsl:when test="$type = ('textarea')">
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="$field/label"/>
                                        <xsl:with-param name="value" select="'#unknown'"/>
                                    </xsl:call-template>
                                </xsl:when>
                                <xsl:otherwise>
                                    <xsl:call-template name="simple-print">
                                        <xsl:with-param name="label" select="$field/label"/>
                                        <xsl:with-param name="value" select="'#unknown'"/>
                                    </xsl:call-template>
                                </xsl:otherwise>
                            </xsl:choose>
                        </xsl:for-each>
                    </div>
                </xsl:for-each>
            </div>
        </div>

    </xsl:template>

    <xsl:template name="choose-print">
        <xsl:param name="options"/>
        <xsl:param name="label"/>
        <xsl:param name="value"/>

        <xsl:variable name="new_value" as="xs:string*">
            <xsl:choose>
                <xsl:when test="exists($options//*)">
                    <xsl:for-each select="$value[text()]">
                        <xsl:sequence select="local:get_label(current()/text(), $options/descendant-or-self::options)"/>
                    </xsl:for-each>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:sequence select="$value"/>
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>

        <xsl:call-template name="list-print">
            <xsl:with-param name="label" select="$label"/>
            <xsl:with-param name="values" select="$new_value"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="multichoose-print">
        <xsl:param name="options"/>
        <xsl:param name="label"/>
        <xsl:param name="values"/>

        <xsl:variable name="new_value" select="$values/local:get_label(text(), $options/descendant-or-self::options)"/>
        <!--<xsl:variable name="new_value" select="$values"/>-->

        <xsl:call-template name="list-print">
            <xsl:with-param name="label" select="$label"/>
            <xsl:with-param name="values" select="$new_value"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="checkbox-print">
        <xsl:param name="options"/>
        <xsl:param name="label"/>
        <xsl:param name="report-data-node"/>

        <xsl:variable name="new_values" select="$report-data-node/value[text()]/local:get_label(text(), $options//options)"/>

        <xsl:call-template name="list-print">
            <xsl:with-param name="label" select="$label"/>
            <xsl:with-param name="values" select="$new_values"/>
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="simple-print">
        <xsl:param name="label"/>
        <xsl:param name="value"/>
        <div class="print-row">
            <span class="header">
                <xsl:value-of select="$label"/>
            </span>
            <span class="value">
                <xsl:choose>
                    <xsl:when test="string-length($value) > 0">
                        <xsl:value-of select="$value"/>
                    </xsl:when>
                    <xsl:otherwise>-</xsl:otherwise>
                </xsl:choose>
            </span>
        </div>
    </xsl:template>

    <xsl:template name="list-print">
        <xsl:param name="label"/>
        <xsl:param name="values"/>
        <div class="print-row">
            <span class="header">
                <xsl:value-of select="$label"/>
            </span>
            <span class="value">
                <xsl:choose>
                    <xsl:when test="count($values) > 0">
                        <ul>
                            <xsl:for-each select="$values">
                                <li>
                                    <span><xsl:value-of select="current()"/></span>
                                </li>
                            </xsl:for-each>
                        </ul>
                    </xsl:when>
                    <xsl:otherwise>-</xsl:otherwise>
                </xsl:choose>
            </span>
        </div>
    </xsl:template>

</xsl:stylesheet>
