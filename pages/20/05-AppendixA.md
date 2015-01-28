---
layout: page
group: sdata-20
level: 1
title: Appendix A - Metadata elements for JSON
---

SData for JSON recognizes a set of metadata elements presented in the table below.  Any application can 
extend this set with native metadata elements that should be described in their respective contracts.

It should be noted that some metadata elements in the table below are not referenced directly in this 
document. In these cases, the metadata elements are drawn from SData v1.1, and are applicable to the 
SData 2.0 JSON format. For further explanation of these elements, the reader is referred to [1].

<table class="left">
    <tr>
        <th>Name</th><th>Description</th><th>Applicable to</th><th>Point of definition</th>
    </tr>
    
    <tr>
        <th>$applicationCode</th>
        
        <td>
        JSON diagnosis related: Application specific diagnosis code
        </td>
        
        <td>Diagnoses object</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$averageLength</th>
        
        <td>
        Contains the average display length needed
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$baseUrl</th>
        
        <td>
        URL leading to the resource kind level of an application. 
The URL SHOULD NOT end in a "/"; this is to aid readability 
when $baseUrl is concatenated with other strings to form 
new URLs.<br />
<strong>Examples:</strong><br />
<i>"$baseUrl":</i> "http://www.example.com/MyApp/Contract/-"<br />
<i>"$url" : "{baseUrl}/$services/pricingService"</i>
        </td>
        
        <td>Feed</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$batch</th>
        
        <td>
        expresses the manner of invocations supported in batch by 
the provider. 
Allowable values are:
<ul>
<li>  <strong>false [default]</strong>: indicates batching is not supported</li>
<li>  true</li>
</ul> 
        </td>
        
        <td>Request</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$batchingMode</th>
        
        <td>
        Batching is supported for the resource kind. Allowable 
values are: sync, async, syncOrAsync
        </td>
        
        <td>Links</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$body</th>
        
        <td>
        JSON object containing the payload transported to the 
provider from an SData link
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$capabilities</th>
        
        <td>
        String element containing a comma separated list of the 
resource's capabilities. These may contain
<ul>
<li>  <strong>filter</strong>: corresponds to canFilter <a href="../../core/AppendixA/">sme</a> attribute</li>
<li>  <strong>group</strong>: corresponds to canGroup <a href="../../core/AppendixA/">sme</a> attribute</li>
<li>  <strong>search</strong>: corresponds to canSearch <a href="../../core/AppendixA/">sme</a> attribute</li>
<li>  <strong>sort</strong>: corresponds to the canSort <a href="../../core/AppendixA/">sme</a> attribute</li>
</ul>
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$create</th>
        
        <td>
        Link used to create a new resource. 
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$delete</th>
        
        <td>
        Link used to delete an existing resource
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$deleteMissing</th>
        
        <td>
        Indicates that all elements not present in an array must be 
considered as deleted
        </td>
        
        <td>Request</td>
        <td>sdata.xsd</td>
    </tr>
    
    <tr>
        <th>$details</th>
        
        <td>
        Link used to retrieve a single resource (response is an entry)
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$diagnoses</th>
        
        <td>
        Array containing objects providing detailed indications of 
errors and warnings encountered by the provider during 
the execution of a request
        </td>
        
        <td>Response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$elapsedSeconds</th>
        
        <td>
        JSON tracking related:<br />
Time elapsed since operation started, in seconds.
        </td>
        
        <td>Tracking response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$enum</th>
        
        <td>
        Contains the allowable values of an enum property (see 
sdata/choice type)
        </td>
        
        <td>Property</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$etag</th>
        
        <td>
        opaque identifier assigned by the provider to a version of a 
resource
        </td>
        
        <td>Response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$format</th>
        
        <td>
        Is associated with sdata/string properties; imposes a 
particular structure to the string
        </td>
        
        <td>Property</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$fractionDigits</th>
        
        <td>
        Number of digits after the decimal point
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$groupName</th>
        
        <td>
        A group (category) name to group related properties
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$invocation</th>
        
        <td>
        The manner in which the <u>provider</u> should process the 
request <a href="#12">12</a>. 
Allowable values are: 
<ul>
<li>  <strong>sync</strong> [default], </li>
<li>  <strong>async</strong>, </li>
<li>  <strong>syncOrAsync</strong>.</li>
</ul>
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$isDeleted</th>
        
        <td>
        Indicates that a member of an array has been deleted
        </td>
        
        <td>Response</td>
        <td>sdata.xsd</td>
    </tr>
    
    <tr>
        <th>$isLocalized</th>
        
        <td>
        The property contains localized text
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$isMandatory</th>
        
        <td>
        The property cannot have an empty content
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$isReadOnly</th>
        
        <td>
        The contents of the property cannot be modified
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
	<tr>
        <th>$isUniqueKey</th>
        
        <td>
        The property contains a unique key
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
	
    <tr>
        <th>$item</th>
        
        <td>
        Contains the description of an individual element in an 
sdata/array, sdata/choice, sdata/reference, sdata/object
        </td>
        
        <td>Entry definition</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$key</th>
        
        <td>
        The native primary key of the resource. Its value can be 
used to target a single resource (ex: 
<a href="http://www.example.com/MyApp/-/myResource('123')">http://www.example.com/MyApp/-/myResource('123')</a> )
        </td>
        
        <td>Property</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$links</th>
        
        <td>
        Object containing links that present functional aspects of 
the resource (ex: edit, lookup, create).
        </td>
        
        <td>Entry</td>
        <td>JSON format doc <br />JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$list</th>
        
        <td>
        Link used to retrieve a set of resources (response is a feed)
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$lookup</th>
        
        <td>
        Link used to retrieve a set of resources to be used to 
populate a list of choices. This corresponds to the 
sdata:lookup defined in the SData specification section 6.7
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$maxLength</th>
        
        <td>
        Contains the maximum length of a string
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$message</th>
        
        <td>
        JSON diagnosis related:
Friendly message for the diagnosis
        </td>
        
        <td>Diagnosis object</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$method</th>
        
        <td>
        HTTP method used to operate on a resource
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$payloadPath</th>
        
        <td>
        JSON diagnosis related: 
XPath expression that refers to the payload element 
responsible for the error
        </td>
        
        <td>Diagnosis object</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$phase</th>
        
        <td>
        JSON tracking related:
End user message describing the current phase of the 
operation.
        </td>
        
        <td>Tracking response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$phaseDetail</th>
        
        <td>
        JSON tracking related:
Detailed message for the progress within the current phase.
        </td>
        
        <td>Tracking response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$pluralName</th>
        
        <td>
        Name of a resource in plural form
        </td>
        
        <td>Feed</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$pollingMillis</th>
        
        <td>
        JSON tracking related:
Delay (in milliseconds) that the consumer should use before 
polling the service again.
        </td>
        
        <td>Tracking response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$precedence</th>
        
        <td>
        Controls the visibility of properties on small screens
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$progress</th>
        
        <td>
        JSON tracking related:
Percentage of operation completed.
        </td>
        
        <td>Tracking response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$properties</th>
        
        <td>
        JSON object containing the metadata in a per-property 
manner for a resource
        </td>
        
        <td>Entry</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$protocolFilters</th>
        
        <td>
        Comma separated list of properties that can be used for 
filtering within the where clause of the URL
        </td>
        
        <td>Feed</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$remainingSeconds</th>
        
        <td>
        JSON tracking related:
Expected remaining time, in seconds.
        </td>
        
        <td>Tracking response</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$request</th>
        
        <td>
        Contains either 
		<ol start="3">
<li>  URL of a prototype (see <a href="../05-0900/">Embedded metadata Section</a>)</li>
<li>  JSON object containing the description of request's </li>
</ol>
individual parameters. 
The <strong>omission</strong> of $request indicates that the request has <strong>no parameters</strong>. Should parameters exist, their description is 
found in the contained $properties object.
An individual parameter object has a unique name and 
contains the following properties:
<ul>
<li>  $title [optional]: human-readable parameter name</li>
<li>  <strong>$type [mandatory]</strong>: defines the type of the parameter</li>
</ul>
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$resources</th>
        
        <td>
        Array containing the individual entries
        </td>
        
        <td>Feed</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$response</th>
        
        <td>
        Contains either
		<ol>
<li>  URL of a prototype (see <a href="../05-0900/">Embedded metadata Section</a>)</li>
<li>  JSON object containing the description of request's </li>
</ol>
expected response. The description of the 
properties returned by the provider is found in the 
enclosed $properties object
        </td>
        
        <td>Feed/entry</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$sdataCode</th>
        
        <td>
        JSON diagnosis related;
The SData diagnosis code
        </td>
        
        <td>Diagnosis object</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$severity</th>
        
        <td>
        JSON diagnosis related:
Severity of the diagnosis entry. Possible values are:
<strong>
<ul>
<li>info</li>
<li>warning </li>
<li>transient </li>
<li>error</li>
<li>fatal</li>
</ul></strong>
        </td>
        
        <td>Diagnosis object</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$stackTrace</th>
        
        <td>
        JSON diagnosis related:
Stack trace - to be used with care
        </td>
        
        <td>Diagnosis object</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$tags</th>
        
        <td>
        Comma separated list of tags
        </td>
        
        <td></td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$title</th>
        
        <td>
        Human-readable description of the resource
        </td>
        
        <td>Feed/entry</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$totalDigits</th>
        
        <td>
        Maximum overall number of digits for a decimal property
        </td>
        
        <td>Property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$type</th>
        
        <td>
        SData JSON type of a property
        </td>
        
        <td>Property</td>
        <td>JSON metadata doc (here)</td>
    </tr>
	
	<tr>
        <th></th>
        
        <td>
        For a Link, the $type identifies the internet media type of 
the response.
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$unsupported</th>
        
        <td>
        The element is an unsupported part of a global contract
        </td>
        
        <td>Feed/entry/property</td>
        <td>Sme.xsd</td>
    </tr>
    
    <tr>
        <th>$updated</th>
        
        <td>
        the time stamp of the last update of the resource, 
formatted according to <a href="http://www.w3.org/TR/NOTE-datetime">ISO 8601 dateTime</a> specification
        </td>
        
        <td>Entry</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$updateFull</th>
        
        <td>
        Link used to update a resource by providing all its contents
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$updatePartial</th>
        
        <td>
        Link used to update only a selected subset of the properties 
of a resource
        </td>
        
        <td>Links</td>
        <td>JSON metadata doc (here)</td>
    </tr>
    
    <tr>
        <th>$url</th>
        
        <td>
        URL pointing to the resource
        </td>
        
        <td>Feed/entry</td>
        <td>Sdata.xsd, JSON format doc</td>
    </tr>
    
    <tr>
        <th>$uuid</th>
        
        <td>
        UUID identifying the resource. UUIDs may complement the 
native primary keys; they are frequently encountered in 
application integration to identify the same logical resource 
across application boundaries.
        </td>
        
        <td>Entry</td>
        <td>JSON format doc</td>
    </tr>
    
    <tr>
        <th>$value</th>
        
        <td>
        Introduces the value of a property in an enum context (see 
sdata/choice type)
        </td>
        
        <td>Property</td>
        <td>JSON metadata doc (here)</td>
    </tr>

</table>

***
<a name="12" href="#12">12</a>. This should not be confused with client-side AJAX requests. The mechanism corresponds to the sme:invocationMethod 
described in section [11.4](../../core/1104/) and [11.5](../../core/1105/) of the SData 1.1 standard