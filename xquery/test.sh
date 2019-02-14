#!/bin/sh
basex/bin/basex \
  -bsource_url=../xslt/IAS_-_Invasive_Alien_Species__1_tmp.xml \
  ias-2018.xquery > out.html \
&& google-chrome-stable out.html