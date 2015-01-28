---
layout: page
group: core
level: 1
title: Appendix E - registry.xsd
---

<pre xmlns:jx="http://apache.org/cocoon/templates/jx/1.0" xmlns:ns="http://outerx.org/daisy/1.0">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;?xml-stylesheet type="text/xsl" href="XsdToHtml.xslt"?&gt;
&lt;xs:schema xmlns:sme="http://schemas.sage.com/sdata/sme/2007" targetNamespace="http://schemas.sage.com/sdata/registry/2009" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://schemas.sage.com/sdata/registry/2009"&gt;
  &lt;xs:element name="endpoint" id="endpoint" type="endpoint--type" sme:role="resourceKind" sme:pluralName="endpoints" sme:label="Endpoints" sme:canGet="true" sme:canPost="true" sme:canPut="true" sme:canDelete="true" sme:canPageNext="true" sme:canPagePrevious="true" sme:canPageIndex="true" sme:supportsETag="true" /&gt;
  &lt;xs:complexType name="endpoint--type"&gt;
    &lt;xs:all&gt;
      &lt;xs:element name="title" type="xs:string" minOccurs="0" maxOccurs="1" sme:isLocalized="true" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="description" type="xs:string" minOccurs="0" maxOccurs="1" sme:isLocalized="true" /&gt;
      &lt;xs:element name="endpointType" type="endpoint--enum" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="protocol" type="protocol--enum" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="host" type="xs:string" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="port" type="xs:integer" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="applicationName" type="xs:string" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="contractName" type="xs:string" minOccurs="0" maxOccurs="1" nillable="true" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="contractVersion" type="xs:string" minOccurs="0" maxOccurs="1" nillable="true" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="dataSetName" type="xs:string" minOccurs="0" maxOccurs="1" nillable="true" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="url" type="xs:anyURI" minOccurs="0" maxOccurs="1" /&gt;
      &lt;xs:element name="isBrowsable" type="xs:boolean" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true"/&gt;
      &lt;xs:element name="aliveStamp" type="xs:dateTime" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true"/&gt;
      &lt;xs:element name="properties" type="property--list" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true"/&gt;
    &lt;/xs:all&gt;
  &lt;/xs:complexType&gt;
  &lt;xs:complexType name="endpoint--list"&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element minOccurs="0" maxOccurs="unbounded" name="endpoint" type="endpoint--type" /&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;
  &lt;xs:simpleType name="endpoint--enum"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:enumeration value="application"/&gt;
      &lt;xs:enumeration value="contract"/&gt;
      &lt;xs:enumeration value="dataSet"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
  &lt;xs:simpleType name="protocol--enum"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:enumeration value="http"/&gt;
      &lt;xs:enumeration value="https"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;

  &lt;xs:element name="contract" id="contract" type="contract--type" sme:role="resourceKind" sme:pluralName="contracts" sme:label="Contracts" sme:canGet="true" sme:canPost="true" sme:canPut="true" sme:canDelete="true" sme:canPageNext="true" sme:canPagePrevious="true" sme:canPageIndex="true" sme:supportsETag="true" /&gt;
  &lt;xs:complexType name="contract--type"&gt;
    &lt;xs:all&gt;
      &lt;xs:element name="name" type="xs:string" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="version" type="xs:string" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="title" type="xs:string" minOccurs="0" maxOccurs="1" sme:isLocalized="true" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="description" type="xs:string" minOccurs="0" maxOccurs="1" /&gt;
      &lt;xs:element name="namespace" type="xs:anyURI" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
      &lt;xs:element name="baseNamespace" type="xs:anyURI" minOccurs="0" maxOccurs="1" sme:canSort="true" sme:canFilter="true" /&gt;
    &lt;/xs:all&gt;
  &lt;/xs:complexType&gt;
  &lt;xs:complexType name="contract--list"&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element minOccurs="0" maxOccurs="unbounded" name="endpoint" type="endpoint--type" /&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:complexType name="property--list"&gt;
    &lt;xs:sequence&gt;
      &lt;xs:element minOccurs="0" maxOccurs="unbounded" name="property" type="property--type"/&gt;
    &lt;/xs:sequence&gt;
  &lt;/xs:complexType&gt;

  &lt;xs:complexType name="property--type"&gt;
    &lt;xs:simpleContent&gt;
      &lt;xs:extension base="xs:string"&gt;
        &lt;xs:attribute name="name" type="xs:string" use="required"/&gt;
        &lt;xs:attribute name="ns" type="xs:anyURI" use="optional"/&gt;
      &lt;/xs:extension&gt;
    &lt;/xs:simpleContent&gt;
  &lt;/xs:complexType&gt;
&lt;/xs:schema&gt;</pre>

* * *