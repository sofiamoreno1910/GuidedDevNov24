namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7df8b3a7-e47d-44e0-9b87-ac697b7f027c");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("0ce55f89-eb1c-476e-b305-57c7f477d203");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,77,111,212,48,16,189,87,202,127,24,69,28,18,105,101,181,87,22,42,177,171,5,85,170,0,117,211,94,16,7,175,51,155,26,57,118,228,113,182,44,168,255,29,127,36,155,192,22,193,92,226,60,191,121,51,111,60,160,121,139,212,113,129,80,161,181,156,204,222,177,181,209,123,217,244,150,59,105,116,118,241,51,3,128,236,2,160,39,169,27,216,30,201,97,187,12,224,12,157,103,183,173,209,203,236,175,215,22,217,70,59,233,36,210,255,177,216,230,128,218,69,114,224,126,137,248,49,130,183,210,55,163,209,22,91,241,136,45,255,232,221,192,91,200,239,201,222,33,87,238,152,151,95,135,172,174,223,41,41,64,40,78,4,233,242,5,29,120,13,43,78,248,194,77,22,85,226,44,146,224,73,210,28,124,219,178,70,56,24,89,195,39,189,229,7,111,166,48,187,111,40,28,16,234,26,237,2,146,228,10,247,222,89,20,126,103,27,2,44,179,73,111,16,159,0,128,157,111,134,157,36,71,45,44,151,19,245,196,77,21,192,70,111,126,10,69,2,202,148,117,26,117,136,26,133,108,185,130,206,74,17,6,150,114,216,7,116,213,177,195,122,109,84,223,234,7,174,122,124,51,80,175,139,48,212,207,129,159,151,227,75,132,144,123,40,146,204,53,92,93,142,49,183,245,155,177,25,10,128,236,134,214,92,11,84,88,251,46,156,237,113,153,101,103,180,233,68,206,134,61,241,43,75,188,193,10,219,78,113,23,12,104,124,130,91,35,184,146,63,248,78,225,54,242,138,193,214,61,161,245,59,173,253,115,248,133,102,119,72,166,183,194,147,140,245,42,139,243,130,48,219,160,180,123,249,2,242,51,125,98,113,68,55,84,25,179,146,77,250,203,75,86,153,161,126,57,184,249,183,21,111,33,1,236,189,177,45,119,197,31,22,125,249,43,118,185,122,149,207,94,126,210,114,143,214,60,197,25,108,190,11,236,130,203,81,96,228,79,228,231,241,56,28,226,231,249,23,181,138,86,2,9,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("a58b6ec1-d895-b654-33cf-ed5d968476ec"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("0ce55f89-eb1c-476e-b305-57c7f477d203"),
				CreatedInSchemaUId = new Guid("7df8b3a7-e47d-44e0-9b87-ac697b7f027c"),
				ModifiedInSchemaUId = new Guid("7df8b3a7-e47d-44e0-9b87-ac697b7f027c")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7df8b3a7-e47d-44e0-9b87-ac697b7f027c"));
		}

		#endregion

	}

	#endregion

}

