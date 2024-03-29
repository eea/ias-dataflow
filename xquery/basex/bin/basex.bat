@echo off
setLocal EnableDelayedExpansion

REM Path to core and library classes
set MAIN=%~dp0\..
set CP=%MAIN%\BaseX.jar;%MAIN%\lib\custom\*;%MAIN%\lib\*

REM Options for virtual machine
set BASEX_JVM=-Xmx1200m %BASEX_JVM%

REM Run code
java -cp "%CP%" %BASEX_JVM% org.basex.BaseX %*
