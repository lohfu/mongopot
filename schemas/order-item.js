module.exports = {
	//"@context": { type: String, default: "http://schema.org" },
	//"@type": { type: String, default: "OrderItem" },

	//>Properties from OrderItem
	//orderDelivery: ParcelDelivery,//The delivery of the parcel related to this order or order item.
	orderItemNumber: String,//The identifier of the order item.
	//orderItemStatus: OrderStatus,//	The current status of the order item.
	orderQuantity: Number,//The number of the item ordered. If the property is not set, assume the quantity is one.
	//orderedItem: Product  or OrderItem,//	The item ordered.
	//>Properties from Thing
	additionalType: String,//	An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
	alternateName: String,//An alias for the item.
	description: String,//A short description of the item.
	//image	URL  or ImageObject		An image of the item. This can be a URL or a fully described ImageObject.
	//mainEntityOfPage	CreativeWork  or URL		Indicates a page (or other CreativeWork) for which this thing is the main entity being described.  Many (but not all) pages have a fairly clear primary topic, some entity or thing that the page describes. For example a restaurant's home page might be primarily about that Restaurant, or an event listing page might represent a single event. The mainEntity and mainEntityOfPage properties allow you to explicitly express the relationship between the page and the primary entity.  Related properties include sameAs, about, and url.  The sameAs and url properties are both similar to mainEntityOfPage. The url property should be reserved to refer to more official or authoritative web pages, such as the item’s official website. The sameAs property also relates a thing to a page that indirectly identifies it. Whereas sameAs emphasises well known pages, the mainEntityOfPage property serves more to clarify which of several entities is the main one for that page.  mainEntityOfPage can be used for any page, including those not recognized as authoritative for that entity. For example, for a product, sameAs might refer to a page on the manufacturer’s official site with specs for the product, while mainEntityOfPage might be used on pages within various retailers’ sites giving details for the same product.  about is similar to mainEntity, with two key differences. First, about can refer to multiple entities/topics, while mainEntity should be used for only the primary one. Second, some pages have a primary entity that itself describes some other entity. For example, one web page may display a news article about a particular person. Another page may display a product review for a particular product. In these cases, mainEntity for the pages should refer to the news article or review, respectively, while about would more properly refer to the person or product.  Inverse property: mainEntity.
	name: String,//The name of the item.
	//potentialAction	Action	Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
	sameAs: String,//	URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Freebase page, or official website.
	url: String,//	URL of the item.
};
