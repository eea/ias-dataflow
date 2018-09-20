#!/bin/sh
basex/bin/basex -bsource_url=tests/qc-ias-dummy.xml ias-2018.xquery > out.html && google-chrome-stable out.html