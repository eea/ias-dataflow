#!/bin/sh
java -jar ./saxon/saxon9.jar \
  -s:./IAS_-_Invasive_Alien_Species__1.xml \
  -o:./ias_output.html \
  -xsl:./ias_transform.xsl \
&& google-chrome-stable ./ias_output.html