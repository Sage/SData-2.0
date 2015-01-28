---
layout: page
group: sync
level: 1
title: Appendix A - sdatasync.xsd
---

<pre xmlns:jx="http://apache.org/cocoon/templates/jx/1.0" xmlns:ns="http://outerx.org/daisy/1.0">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema targetNamespace="http://schemas.sage.com/sdata/sync/2008/1"
&nbsp;&nbsp;&nbsp; elementFormDefault="qualified"
&nbsp;&nbsp;&nbsp; xmlns="http://schemas.sage.com/sdata/sync/2008/1"
&nbsp;&nbsp;&nbsp; xmlns:xs="http://www.w3.org/2001/XMLSchema"&gt;

&nbsp; &lt;xs:element name="digest" type="digest--type"/&gt;
&nbsp; &lt;xs:element name="syncState" type="syncState--type"/&gt;
&nbsp; &lt;xs:element name="syncMode" type="syncMode--enum"/&gt;

&nbsp; &lt;xs:complexType name="digest--type"&gt;
&nbsp;&nbsp;&nbsp; &lt;xs:element name="origin" type="xs:anyURI"/&gt;
&nbsp;&nbsp;&nbsp; &lt;xs:element name="digestEntry" type="digestEntry--type" maxOccurs="unbounded"/&gt;
&nbsp; &lt;/xs:complexType&gt;

&nbsp; &lt;xs:complexType name="syncState--type"&gt;
&nbsp;&nbsp;&nbsp; &lt;xs:all&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="endpoint" type="xs:anyURI"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="tick" type="xs:integer"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="stamp" type="xs:dateTime"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="user" type="xs:string"/&gt;
&nbsp;&nbsp;&nbsp; &lt;/xs:all&gt;
&nbsp; &lt;/xs:complexType&gt;

&nbsp; &lt;xs:complexType name="digestEntry--type"&gt;
&nbsp;&nbsp;&nbsp; &lt;xs:all&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="endpoint" type="xs:anyURI"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="tick" type="xs:integer"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="stamp" type="xs:dateTime"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:element name="conflictPriority" type="xs:integer"/&gt;
&nbsp;&nbsp;&nbsp; &lt;/xs:all&gt;
&nbsp; &lt;/xs:complexType&gt;

  &lt;xs:simpleType name="syncMode--enum"&gt;
&nbsp;&nbsp;&nbsp; &lt;xs:restriction base="xs:string"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:enumeration value="catchUp"/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;xs:enumeration value="immediate"/&gt;
&nbsp;&nbsp;&nbsp; &lt;/xs:restriction&gt;
&nbsp; &lt;/xs:simpleType&gt;

&nbsp;&lt;/xs:schema&gt;</pre>

* * *