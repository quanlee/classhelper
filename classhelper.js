var initSpreadsheet = function()
{
  var spreadsheet_url = document.getElementById("txt_spreadsheetUrl").value;
  Tabletop.init( { key:         spreadsheet_url,
                   callback:    showInfo,
                   simpleSheet: true } );

}

var showInfo = function(data)
{
  document.getElementById("txt_results").value = stringify(data);
}

var stringify = function(obj)
{
  console.log(typeof(obj));
  var ret_array = [];
  ret_array.push("{\n")
  for(var key in obj)
  {

    if(Array.isArray(obj[key]))
    {
      console.log(key + " is array");
      for(var i = 0, len = obj[key].length; i < len; i++)
      {
        ret_array.push(i + " = " + obj[key][i] + "\n");
      }
    }
    else if(typeof(obj[key]) == "object")
    {
      console.log(key + " is " + typeof(obj));
      ret_array.push(stringify(obj[key]));
    }
    else
    {
      ret_array.push(key + ":" + obj[key] + "\n");
    }
  }
  ret_array.push("}\n")
  return ret_array;
}
