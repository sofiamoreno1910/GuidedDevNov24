define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"caption": "#ResourceString(SaveButton_caption)#",
					"size": "large",
					"iconPosition": "only-text",
					"clickMode": "default"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "44e40afc-f934-4cc6-8e1e-fc29cbef3567",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_7qonbrw",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_7qonbrw_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalculatePriceMenu",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_1vu0ym5_caption)#",
					"visible": true,
					"icon": "calculator-icon",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					}
				},
				"parentName": "Button_7qonbrw",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeBotton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_kyle9c5_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "database-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RealtyNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrNumber_3vf33as",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_3vf33as",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_86whpdy",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_86whpdy"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_wmvgab1",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_wmvgab1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Commision",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommision_5qvdddw",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommision_5qvdddw",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_yjhn2dz",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_yjhn2dz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_trhp0kk",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_trhp0kk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_iyerogk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_iyerogk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_oe35c34",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_oe35c34",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_45hs9cc",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_45hs9cc",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_ykymx2s",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_ykymx2s_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_7agwh5z",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_7agwh5z",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_i8pe1jj",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i8pe1jj_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Country",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_az8n2qo",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_az8n2qo",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "PromotionDate",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrPromotionDate_5zqklbu",
					"labelPosition": "auto",
					"control": "$PDS_UsrPromotionDate_5zqklbu",
					"pickerType": "date"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "#ResourceString(Percent_label)#",
					"control": "$PDS_UsrOfferTypeUsrCommisionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_qznughs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 2,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_qznughs_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "GridContainer_669syhq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_qznughs",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3tn3mu7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_669syhq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_zy85jw9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_zy85jw9_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_3tn3mu7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_1h9524k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_1h9524k_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_gbot1wkDS"
						}
					}
				},
				"parentName": "FlexContainer_3tn3mu7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ch4z2fx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ch4z2fx_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_3tn3mu7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_nou9xxe",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_nou9xxe_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetails"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ch4z2fx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_leud34e",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_leud34e_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ch4z2fx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4lsoc1a",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4lsoc1a_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_4lsoc1a_GridDetail_gbot1wk",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_gbot1wk"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_4lsoc1a_SearchValue",
							"GridDetailSearchFilter_4lsoc1a_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_3tn3mu7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ae1m36g",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_qznughs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitGridDetails",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_gbot1wk",
					"activeRow": "$GridDetail_gbot1wk_ActiveRow",
					"selectionState": "$GridDetail_gbot1wk_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_gbot1wk_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_gbot1wkDS_Id",
					"columns": [
						{
							"id": "8b862bcf-7ebc-952d-520b-21371cb609a6",
							"code": "GridDetail_gbot1wkDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_gbot1wkDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 128
						},
						{
							"id": "8174dda4-c7ce-4ea2-5787-917857286bcf",
							"code": "GridDetail_gbot1wkDS_UsrPotencialCustomer",
							"caption": "#ResourceString(GridDetail_gbot1wkDS_UsrPotencialCustomer)#",
							"dataValueType": 10,
							"width": 179
						},
						{
							"id": "dd077a98-96a4-f5d7-6d45-ad3629f7d9b9",
							"code": "GridDetail_gbot1wkDS_UsrManager",
							"caption": "#ResourceString(GridDetail_gbot1wkDS_UsrManager)#",
							"dataValueType": 10,
							"width": 114
						},
						{
							"id": "dd7f42df-e461-cc06-20cb-527ebfff7b0c",
							"code": "GridDetail_gbot1wkDS_UsrComment",
							"caption": "#ResourceString(GridDetail_gbot1wkDS_UsrComment)#",
							"dataValueType": 28,
							"width": 125
						},
						{
							"id": "e4e63d1f-449f-42e4-1c2f-581c754f0c36",
							"code": "GridDetail_gbot1wkDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_gbot1wkDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 145
						},
						{
							"id": "8885df20-9026-74a3-c585-1bc722600505",
							"code": "GridDetail_gbot1wkDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_gbot1wkDS_UsrParentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_ae1m36g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gbot1wk_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gbot1wkDS",
							"filters": "$GridDetail_gbot1wk | crt.ToCollectionFilters : 'GridDetail_gbot1wk' : $GridDetail_gbot1wk_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gbot1wk_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitGridDetails",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gbot1wk_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gbot1wkDS",
							"filters": "$GridDetail_gbot1wk | crt.ToCollectionFilters : 'GridDetail_gbot1wk' : $GridDetail_gbot1wk_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gbot1wk_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_gbot1wk_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_gbot1wk_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitGridDetails",
							"filters": "$GridDetail_gbot1wk | crt.ToCollectionFilters : 'GridDetail_gbot1wk' : $GridDetail_gbot1wk_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gbot1wk_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetails",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_gbot1wk_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_gbot1wkDS",
							"filters": "$GridDetail_gbot1wk | crt.ToCollectionFilters : 'GridDetail_gbot1wk' : $GridDetail_gbot1wk_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_gbot1wk_SelectionState"
						}
					}
				},
				"parentName": "VisitGridDetails",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_86whpdy": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_wmvgab1": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_yjhn2dz": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_trhp0kk": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComment_oe35c34": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_45hs9cc": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_3vf33as": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_7agwh5z": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_az8n2qo": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCommision_5qvdddw": {
						"modelConfig": {
							"path": "PDS.UsrCommision"
						}
					},
					"PDS_UsrOfferTypeUsrCommisionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommisionPercent"
						}
					},
					"PDS_UsrPromotionDate_5zqklbu": {
						"modelConfig": {
							"path": "PDS.UsrPromotionDate"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DateFutureValidator",
								"params": {
									"message": "#ResourceString(FutureDateWarning)#"
								}
							}
						}
					},
					"GridDetail_gbot1wk": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_gbot1wkDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_4lsoc1a_GridDetail_gbot1wk",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_gbot1wkDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.UsrVisitDateTime"
									}
								},
								"GridDetail_gbot1wkDS_UsrPotencialCustomer": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.UsrPotencialCustomer"
									}
								},
								"GridDetail_gbot1wkDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.UsrManager"
									}
								},
								"GridDetail_gbot1wkDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.UsrComment"
									}
								},
								"GridDetail_gbot1wkDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.CreatedOn"
									}
								},
								"GridDetail_gbot1wkDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.UsrParentRealty"
									}
								},
								"GridDetail_gbot1wkDS_Id": {
									"modelConfig": {
										"path": "GridDetail_gbot1wkDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_gbot1wkDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommisionPercent": {
									"path": "UsrOfferType.UsrCommisionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_gbot1wkDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotencialCustomer": {
									"path": "UsrPotencialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          			{
				request: "usr.PushButtonRequest",
		
                     /* Implementation of the custom query handler. */
		
                     handler: async (request, next) => {
			
                       console.log("Button works...");
			
                       Terrasoft.showInformation("My button was pressed.");
			
                       var price = await request.$context.PDS_UsrPrice_86whpdy;
			
                       console.log("Price = " + price);
		
                       request.$context.PDS_UsrArea_wmvgab1 = price * 0.2;
			
                       /* Call the next handler if it exists and return its result. */
			
                       return next?.handle(request);
		
                     }
	
                    },
          			{
			
                      request: "crt.HandleViewModelAttributeChangeRequest",
			
                     /* The custom implementation of the system query handler. */
		
                     handler: async (request, next) => {
      			
                       if (request.attributeName === 'PDS_UsrPrice_86whpdy' || 		
                           // if price changed
				
                           request.attributeName === 'PDS_UsrOfferTypeUsrCommisionPercent' ) { 	
                         // or percent changed
				
                         var price = await request.$context.PDS_UsrPrice_86whpdy;
		
                         var percent = await request.$context.PDS_UsrOfferTypeUsrCommisionPercent;
			
                         var commission = price * percent / 100;
			
                         request.$context.PDS_UsrCommision_5qvdddw = commission;
		
                       }
		
                       /* Call the next handler if it exists and return its result. */
		
                       return next?.handle(request);
		
                     }
		
                    }

          
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          /* The validator type must contain a vendor prefix.
		
          Format the validator type in PascalCase. */
		
          "usr.DateFutureValidator": {
			
            validator: function (config) {
				
              return function (control) {
					
                let value = control.value;
					
                let today = new Date();
                let valueIsCorrect = value >= today;
					
                var result;
				
                if (valueIsCorrect) {
				
                  result = null;
			
                } else {
			
                  result = {
				
                    "usr.DateFutureValidator": { 
					
                      message: config.message
					
                    }
				
                  };
			
                }
				
                return result;
			
              };
		
            },
				
            params: [
		
              {
					
                name: "minValue"
	
              },
					
              {
						
                name: "message"
				
              }
			
            ],
			
            async: false
		
          },

          	/* The validator type must contain a vendor prefix.
		
            Format the validator type in PascalCase. */
		
          "usr.DGValidator": {
		
            validator: function (config) {
				
              return function (control) {
				
                let value = control.value;
				
                let minValue = config.minValue;
			
                let valueIsCorrect = value >= minValue;
			
                var result;
					
                if (valueIsCorrect) {
			
                  result = null;
			
                } else {
					
                  result = {
					
                    "usr.DGValidator": { 
					
                      message: config.message
			
                    }
			
                  };
				
                }
				
                return result;
			
              };
			
            },
			
            params: [
		
              {
				
                name: "minValue"
	
              },
			
              {
				
                name: "message"
		
              }
		
            ],
			
            async: false
          }


          
        }/**SCHEMA_VALIDATORS*/
	};
});