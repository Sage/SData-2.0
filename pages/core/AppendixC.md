---
layout: page
group: core
level: 1
title: Appendix C - sdatahttp.xsd
---

<pre xmlns:jx="http://apache.org/cocoon/templates/jx/1.0" xmlns:ns="http://outerx.org/daisy/1.0">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema id="sdata"
&nbsp;&nbsp;&nbsp; targetNamespace="http://schemas.sage.com/sdata/http/2008/1"
&nbsp;&nbsp;&nbsp; elementFormDefault="qualified"
&nbsp;&nbsp;&nbsp; xmlns="http://schemas.sage.com/sdata/http/2008/1"
&nbsp;&nbsp;&nbsp; xmlns:xs="http://www.w3.org/2001/XMLSchema"
&gt;
&nbsp; &lt;!-- Element Definitions --&gt;
&nbsp; &lt;xs:element name="httpMethod" type="httpMethodType"/&gt;
&nbsp; &lt;xs:element name="httpStatus" type="xs:integer"/&gt;
&nbsp; &lt;xs:element name="httpMessage" type="xs:string"/&gt;
&nbsp; &lt;xs:element name="location" type="xs:anyURI"/&gt;
&nbsp; &lt;xs:element name="etag" type="xs:string"/&gt;
&nbsp; &lt;xs:element name="ifMatch" type="xs:string"/&gt;

 &nbsp;&lt;!-- Type Definitions --&gt;
&nbsp; &lt;xs:simpleType name="httpMethodType"&gt;
&nbsp;&nbsp;&nbsp; &lt;xs:restriction base="xs:string"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:enumeration value="GET"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:enumeration value="POST"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:enumeration value="PUT"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:enumeration value="DELETE"/&gt;
&nbsp;&nbsp;&nbsp; &lt;/xs:restriction&gt;
&nbsp; &lt;/xs:simpleType&gt;

&lt;/xs:schema&gt;</pre>

* * *