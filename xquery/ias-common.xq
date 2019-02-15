module namespace common = "ias-common";

declare function common:css() as element()* {
    <style>
        <![CDATA[
pre.ias { display: inline }

div.ias { box-sizing: border-box; font-family: "Helvetica Neue",Helvetica,Arial,sans-serif; font-size: 14px; color: #333 }
div.ias.header { font-size: 16px; font-weight: 500; margin: 0.8em 0 0.4em 0 }

div.ias.table { display: table; width: 100%; border-collapse: collapse }
div.ias.row { display: table-row; }
div.ias.col { display: table-cell; padding: 0.4em; border: 1pt solid #aaa }

div.ias.inner { width: 80%; margin-left: 10%; margin-top: 0.4em; margin-bottom: 0.6em }
div.ias.outer { padding-bottom: 0; border: 1pt solid #888 }
div.ias.inner { border: 1pt solid #aaa }
div.ias.parent { margin-bottom: 1.5em }

div.ias.th { border-bottom: 2pt solid #000; font-weight: 600 }
div.ias.blocker { background-color: #ecdbdb; border-bottom: 2pt solid #82211f }
div.ias.error { background-color: #fdf7f7; border-bottom: 2pt solid #b94a48 }
div.ias.warning { background-color: #faf8f0; border-bottom: 2pt solid #f0ad4e }
div.ias.info { background-color: #f4f8fa; border-bottom: 2pt solid #5bc0de }

div.ias.bred { background-color: #ecdbdb; color: #82211f }
div.ias.red { background-color: #fdf7f7; color: #b94a48 }
div.ias.yellow { background-color: #faf8f0; color: #8a6d3b }
div.ias.blue { background-color: #f4f8fa; color: #34789a }
div.ias.gray { background-color: #eee; color: #555 }

div.ias.msg { margin-top: 1em; margin-bottom: 1em; padding: 1em 2em }
div.ias.msg.mblocker { border-color: #82211f }
div.ias.msg.merror { border-color: #b94a48 }
div.ias.msg.mwarning { border-color: #f0ad4e }
div.ias.msg.minfo { border-color: #5bc0de }
div.ias.msg.mmessage { border-color: #ccc }

div.ias.nopadding { padding: 0 }
div.ias.nomargin { margin: 0 }
div.ias.noborder { border: 0 }

div.ias.left { text-align: left }
div.ias.center { text-align: center }
div.ias.right { text-align: right }

div.ias.top { vertical-align: top }
div.ias.middle { vertical-align: middle }
div.ias.bottom { vertical-align: bottom }

div.ias.ten { width: 10%; }
div.ias.quarter { width: 25%; }
div.ias.half { width: 50%; }

input[type=checkbox].ias { display:none }
input[type=checkbox].ias + div.ias { display:none }
input[type=checkbox].ias:checked + div.ias { display: block }

span.ias { display:inline-block }

span.ias.nowrap { white-space: nowrap }
span.ias.link { cursor: pointer; cursor: hand; text-decoration: underline }

span.ias.big { padding: 0.1em 0.9em }
span.ias.medium { padding: 0.1em 0.5em }
span.ias.small { padding: 0.1em }

span.ias.header { display: block; font-size: 16px; font-weight: 600 }

span.ias.failed { color: #fff; background-color: #000000 }
span.ias.blocker { color: #fff; background-color: #82211f }
span.ias.error { color: #fff; background-color: #d9534f }
span.ias.warning { color: #fff; background-color: #f0ad4e }
span.ias.info { color: #fff; background-color: #5bc0de }
span.ias.pass { color: #fff; background-color: #5cb85c }
span.ias.message { color: #fff; background-color: #999 }

]]>
    </style>
};

declare function common:header() as element()* {
    <h5>Please note that where an individual check identifies more than 1,000 errors, only the first 1,000 messages are shown in the results below.</h5>
};

declare function common:feedback($records as element()*) as element(div) {
    let $status :=
        let $all := $records//@class/string()
        let $all := for $i in $all return tokenize($i, "\s+")
        return
            if ($all = "failed") then "failed"
            else if ($all = "blocker") then "blocker"
            else if ($all = "error") then "error"
            else if ($all = "warning") then "warning"
            else if ($all = "skipped") then "skipped"
            else if ($all = "info") then "info"
            else if ($all = "pass") then "ok"
            else ""
    let $feedbackMessage :=
        if ($status = "failed") then
            "QA failed to execute."
        else if ($status = "blocker") then
            "QA completed but there were blocking errors."
        else if ($status = "error") then
            "QA completed but there were errors."
        else if ($status = "warning") then
            "QA completed with warnings."
        else if ($status = "info") then
            "QA completed without errors"
        else if ($status = "ok") then
            "QA completed without errors"
        else
            "QA status is unknown"
    return
        <div class="feedbacktext">
            {common:css()}
            <span id="feedbackStatus" class="{$status => upper-case()}" style="display:none">{$feedbackMessage}</span>
            {$records}
        </div>
};