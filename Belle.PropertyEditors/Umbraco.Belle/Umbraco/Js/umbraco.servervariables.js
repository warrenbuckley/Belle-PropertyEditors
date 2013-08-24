//create the namespace (NOTE: This loads before any dependencies so we don't have a namespace mgr so we just create it manually)
var Umbraco = {};
Umbraco.Sys = {};
//define a global static object
Umbraco.Sys.ServerVariables = {
    umbracoUrls: {
        "contentApiBaseUrl": "/umbraco/UmbracoApi/Content/",
        "mediaApiBaseUrl": "/umbraco/UmbracoApi/Media/",
        "dataTypeApiBaseUrl": "/umbraco/UmbracoApi/DataType/",
        "sectionApiBaseUrl": "/umbraco/UmbracoApi/Section/",
        "treeApplicationApiBaseUrl": "/umbraco/UmbracoTrees/ApplicationTreeApi/",
        "contentTypeApiBaseUrl": "/umbraco/Api/ContentType/",
        "mediaTypeApiBaseUrl": "/umbraco/Api/MediaTypeApi/",
        "authenticationApiBaseUrl": "/umbraco/UmbracoApi/Authentication/",
        //For this we'll just provide a file that exists during the mock session since we don't really have legay js tree stuff
        "legacyTreeJs": "/belle/lib/yepnope/empty.js",
        "entityApiBaseUrl": "/umbraco/UmbracoApi/Entity/"
    },
    umbracoSettings: {
        "umbracoPath": "/umbraco",
        "imageFileTypes": "jpeg,jpg,gif,bmp,png,tiff,tif"
    },
    isDebuggingEnabled: true
};