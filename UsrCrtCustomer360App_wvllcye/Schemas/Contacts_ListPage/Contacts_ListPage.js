define("Contacts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_Name",
							"caption": "#ResourceString(PDS_Name)#",
							"dataValueType": 1,
							"sticky": true
						},
						{
							"id": "438505b8-4a87-0ac6-d1c3-1382780806cb",
							"code": "PDS_Type",
							"caption": "#ResourceString(PDS_Type)#",
							"dataValueType": 10,
							"width": 186
						},
						{
							"id": "5ed38ba6-ba72-02dc-9a20-16061858b43c",
							"code": "PDS_Account",
							"caption": "#ResourceString(PDS_Account)#",
							"dataValueType": 10
						},
						{
							"id": "f571923f-a6bf-3a21-20cb-15ca194c8fc3",
							"code": "PDS_MobilePhone",
							"caption": "#ResourceString(PDS_MobilePhone)#",
							"dataValueType": 28,
							"width": 187
						},
						{
							"id": "13caff8e-71be-0bba-e7a6-bcc271830274",
							"code": "PDS_Email",
							"caption": "#ResourceString(PDS_Email)#",
							"dataValueType": 28,
							"width": 161
						},
						{
							"id": "6edec4e2-3d12-d22a-3cf8-a0b5c22f1d26",
							"code": "PDS_Country",
							"caption": "#ResourceString(PDS_Country)#",
							"dataValueType": 10,
							"width": 158
						},
						{
							"id": "699e8e60-3785-bab5-7d36-efc511da80e4",
							"code": "PDS_BirthDate",
							"caption": "#ResourceString(PDS_BirthDate)#",
							"dataValueType": 8,
							"width": 127
						},
						{
							"id": "61f35674-588a-e5e9-6ce0-92db6f3ff5fd",
							"code": "PDS_Age",
							"caption": "#ResourceString(PDS_Age)#",
							"dataValueType": 4
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_Age": {
						"modelConfig": {
							"path": "PDS.Age"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config",
					"attributes"
				],
				"values": {
					"Age": {
						"path": "Age"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});