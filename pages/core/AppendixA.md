---
layout: page
group: core
level: 1
title: Appendix A - sme.xsd
---

<pre xmlns:jx="http://apache.org/cocoon/templates/jx/1.0" xmlns:ns="http://outerx.org/daisy/1.0">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;xs:schema 
  xmlns="http://schemas.sage.com/sdata/sme/2007" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  targetNamespace="http://schemas.sage.com/sdata/sme/2007" 
  elementFormDefault="qualified" 
  attributeFormDefault="unqualified" 
  id="sme"
  version="1.1.0"&gt;
  &lt;!-- Attribute Definitions --&gt;
  &lt;xs:attribute name="role" type="role--type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Describes the role that the XSD element plays in the contract.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="path" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Relative URL to query resources or invoke the operation.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="pluralName" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Name of the resource kind in plural form.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="label" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Friendly name for the element (localized).&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canGet" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support GET operations?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canPost" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support POST operations?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canPut" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support PUT operations?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canDelete" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support DELETE operations?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canPagePrevious" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support paging backwards?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canPageNext" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support paging forwards?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canPageIndex" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind or relationship property support indexed paging?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canSort" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Can the feed be sorted by this property?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canFilter" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Can the feed be filtered by this property?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canGroup" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Can feed entries be grouped by values of this property?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="canSearch" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind support full-text search through the search query parameter?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="hasUuid" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind use UUIDs to identify resources?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="hasTemplate" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind, service operation or named query provide a $template URL?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="supportsETag" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind support the ETag mechanism to control concurrent updates?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="relationship" type="relationship--type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Type of relationship.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isCollection" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the property refer to a collection of resources or a single resource?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isMandatory" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Is the property value mandatory when creating a new resource?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isReadOnly" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Is the property read-only?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isLocalized" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the property contain localized text?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isUniqueKey" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;States that two resources are not allowed to have the same value for this property. Usually, resources have some kind of “id” property that identifies them uniquely. So this property should be marked with isUniqueKey=”true”, but a resource may have other properties that also have to be unique. For example the social security number of an employee should be unique and should also be marked with isUniqueKey=”true”. A typical employee resource kind will have at least 2 properties marked isUniqueKey: id and ssNumber.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="precedence" type="xs:integer"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Controls the visibility of properties on small screens.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="groupName" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;A group (category) name to group related properties.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="maxLength" type="xs:int"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Represents the maximum length of the string&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="averageLength" type="xs:int" &gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Represents the average display length needed&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="totalDigits" type="xs:int"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Maximum overall number of digits for a decimal property value.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="fractionDigits" type="xs:int"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Maximum number of digits to the right of the decimal point for a decimal property value.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="unsupported" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Is the element part of a global contract that it is not supported by this specific provider?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="compliance" type="compliance--type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Applies to elements that are part of a global contract. Defines the compliance requirement for providers that implement the contract.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="batchingMode" type="syncModes--type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Does the resource kind support batching? If so, which invocation modes does it support?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="invocationMode" type="syncModes--type"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;The supported invocation modes.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isSyncSource" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;
        : Indicates if the resource kind can be used as source in a sync operation (can send sync updates to another application)
        Similar to the canGet, canPut, etc. They advertize the fact that the resources can be synced outbounds and inbounds.  isSyncTarget =true means that resources can be synched from another application to the provider that implements the contract. In the GCRM contract, the contract provider is the ERP application. So, for example, the “commodities” resource kind will have isSyncSource=true and isSyncTarget=false because commodities may be synced from ERP to CRM but not in the reverse direction. From a protocol standpoint, this means that the ERP provider will have a commodities/$syncSource URL (that the CRM engine will call to get changes on commodities) but it will not have any commodities/$syncTarget URL).
      &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isSyncTarget" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Indicates if the resource kind can be used as target in a sync operation (can receive sync updates from another application) &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="syncConflictPriority" type="xs:integer"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;
        Numeric priority to solve conflicts. Smalllest wins. In case of equality on priorities, last modified resource wins (this rule is built into the SData sync protocol).
        Advertises the conflict priority that the sync engine will be using to solve conflicts. This is only useful when sync is bidirectional (isSyncSource and isSyncTarget are both true).
        The syncConflictPriority advertises the conflict priority on the provider side (ERP). The conflict resolution algorithm also needs the conflict priority from the other side (CRM) to resolve conflicts. But we cannot advertise the consumer’s priority in the schema (except maybe as a hint), as the schema describes the provider, not its consumers.

        Note: the conflict priority is passed as part of the sync payload. So the sync framework will use the priority that it gets from the payloads, not the priorities that it may get from the schemas, in order to make its conflict resolution decisions. So this attribute has an informative rather than operative nature.

      &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="syncOrder" type="xs:integer"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;
        Controls the order in which resource kinds are synchronized. Smallest is synchronized first.
      &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="tags" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;
        Comma separated list of tags. Each contract is free to define its own set of tags. 
    This attribute may be applied to &amp;lt;xs:element&amp;gt; schema elements that define resource kind, properties, service operations, etc. 
      &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="protocolFilters" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;
        Comma separated list of protocol filter variable names. Specifies the protocol variable names that may be used in where parameters and resource selectors. 
	This attribute may be applied to &amp;lt;xs:element&amp;gt; schema elements that define resource kinds. 
      &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isGlobalId" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Deprecated. Used for resources that are linked and synced. These resources will have two ids: an id which is the internal id used by the application and a uuid which is the global id use for linking and syncing. If the uuid property is present in the schema, it should be marked with isGlobalId=”true”.&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isIdentifier" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Deprecated. Used to single out the property that holds the primary key of the resource. &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="isDescriptor" type="xs:boolean"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Deprecated. Is the property a descriptor for the resource?&lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;
  &lt;xs:attribute name="copiedFrom" type="xs:string"&gt;
    &lt;xs:annotation&gt;
      &lt;xs:documentation&gt;Deprecated. Indicates that the property is dependent upon a related resource and gives the XPath expression for the corresponding property in the related resource. &lt;/xs:documentation&gt;
    &lt;/xs:annotation&gt;
  &lt;/xs:attribute&gt;

  &lt;!-- Type Definitions --&gt;
  &lt;xs:simpleType name="role--type"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:enumeration value="resourceKind"/&gt;
      &lt;xs:enumeration value="serviceOperation"/&gt;
      &lt;xs:enumeration value="query"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
  &lt;xs:simpleType name="compliance--type"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:enumeration value="may"/&gt;
      &lt;xs:enumeration value="should"/&gt;
      &lt;xs:enumeration value="must"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
  &lt;xs:simpleType name="syncModes--type"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:enumeration value="none"/&gt;
      &lt;xs:enumeration value="sync"/&gt;
      &lt;xs:enumeration value="async"/&gt;
      &lt;xs:enumeration value="syncOrAsync"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
  &lt;xs:simpleType name="relationship--type"&gt;
    &lt;xs:restriction base="xs:string"&gt;
      &lt;xs:enumeration value="parent"/&gt;
      &lt;xs:enumeration value="child"/&gt;
      &lt;xs:enumeration value="reference"/&gt;
      &lt;xs:enumeration value="association"/&gt;
    &lt;/xs:restriction&gt;
  &lt;/xs:simpleType&gt;
&lt;/xs:schema&gt;</pre>

* * *