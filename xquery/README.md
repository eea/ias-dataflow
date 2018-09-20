IAS.xqueries
===============

There is one entry point:

 * ias-2018.xquery - IAS dataflow (Main module)

Run:

    java -cp lib/saxon9-xqj.jar:lib/saxon9he.jar net.sf.saxon.Query -qversion:1.0 ias-2018.xquery source_url=tests/qc-ias-dummy.xml

Testing
-------

All tests:

    ./run_tests.sh

Specific rules only:

    ./run_tests.sh 13 15
