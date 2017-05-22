//add row to table
$(document).ready(function () {
    function addRowTable() {

        //get the current table ID and count the rows of table that match this id
        var idCurrentTable = $(this).closest('table').attr('id');
        var table = document.getElementById(idCurrentTable);
        var rowCount = table.rows.length
        var html;

        //determine which table will be used for adding
        if (idCurrentTable == "table_education")
        {
             html = '<tr>' +
                '<td><input id="ed_checkFieldName_' + (rowCount - 1) + ' type="text" placeholder="Field Name" class="form-control" /></td>' +
                '<td><textarea id=ed_checkFieldValue' + rowCount + ' placeholder="Description" class="form-control"></textarea></td>' +
                '</tr>'
        }
        else if (idCurrentTable == "table_javascript")
        {
            //disabled the button after add to the limit 
            if (rowCount == 10)
            {
                $('#jaS_BtnPlus').attr("disabled", true);
            }
            html = '<tr>'+
                '<td>'+
                '<input type="checkbox" id="jaS_checkBox_' + (rowCount - 1) + '" />' +
                '<input type="text" id="jaS_checkBox_' + (rowCount - 1) + '" placeholder="Skill Name" />' +
                '</td>' +
                '<td>' +
                '  <input type="text" id="jaS_checkFieldValue_' + (rowCount - 1) + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'
        }
        else if (idCurrentTable == "table_NETTech")
        {
            //disabled the button after add to the limit 
            if (rowCount == 12) {
                $('#NET_BtnPlus').attr("disabled", true);
            }
            html = '<tr>' + 
                '<td>' +
                '<input type="checkbox" id="NET_checkBox_' + (rowCount - 1) + '" />' +
                '<input type="text" id="NET_checkBox_' + (rowCount - 1) + '" placeholder="Skill Name" />' +
                '</td>' +
                '<td>' +
                '  <input type="text" id="NET_checkFieldValue_' + (rowCount - 1) + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'
        }
        else if (idCurrentTable == "table_Python") {
            //disabled the button after add to the limit 
            if (rowCount == 7) {
                $('#Python_BtnPlus').attr("disabled", true);
            }
            html = '<tr>' +
                '<td>' +
                '<input type="checkbox" id="Python_checkBox_' + (rowCount - 1) + '" />' +
                '<input type="text" id="Python_checkBox_' + (rowCount - 1) + '" placeholder="Skill Name" />' +
                '</td>' +
                '<td>' +
                '<input type="text" id="Python_checkFieldValue_' + (rowCount - 1) + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'       
        }
        else if (idCurrentTable == "table_Ruby")
        {
            //disabled the button after add to the limit 
            if (rowCount == 7) {
                $('#Ruby_BtnPlus').attr("disabled", true);
            }
            html = '<tr>' +
                '<td>' +
                '<input type="checkbox" id="Ruby_checkBox_' + (rowCount - 1) + '" />' +
                '<input type="text" id="Ruby_checkBox_' + (rowCount - 1) + '" placeholder="Skill Name" />' +
                '</td>' +
                '<td>' +
                '<input type="text" id="Ruby_checkFieldValue_' + (rowCount - 1) + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'
        }
        else if (idCurrentTable == "table_JavaFrame") {
            //disabled the button after add to the limit 
            if (rowCount == 9) {
                $('#JavaFrame_BtnPlus').attr("disabled", true);
            }
            html = '<tr>' +
                '<td>' +
                '<input type="checkbox" id="JavaFrame_checkBox_' + (rowCount - 1) + '" />' +
                '<input type="text" id="JavaFrame_checkBox_' + (rowCount - 1) + '" placeholder="Skill Name" />' +
                '</td>' +
                '<td>' +
                '<input type="text" id="JavaFrame_checkFieldValue_' + (rowCount - 1) + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'
        }
        else if (idCurrentTable == "table_JavaServers") {
            //disabled the button after add to the limit 
            if (rowCount == 9) {
                $('#JavaServers_BtnPlus').attr("disabled", true);
            }
            html = '<tr>' +
                '<td>' +
                '<input type="checkbox" id="JavaServers_checkBox_' + (rowCount - 1) + '" />' +
                '<input type="text" id="JavaServers_checkBox_' + (rowCount - 1) + '" placeholder="Skill Name" />' +
                '</td>' +
                '<td>' +
                '<input type="text" id="JavaServers_checkFieldValue_' + (rowCount - 1) + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'
        }
        else if (idCurrentTable == "table_subProject") {
            //disabled the button after add to the limit 
            if (rowCount == 10) {
                $('#ProCards_BtnPlus').attr("disabled", true);
            }
            html = '<tr>' +
                '<td>' +
                '<input type="text" id="ProDes_checkFieldName_' + rowCount + '" placeholder="Card Name" />' +
                '</td>' +
                '<td>' +
                '<input type="text" id="ProDes_checkFieldValue_' + rowCount + '" placeholder="Description" class="form-control" />' +
                '</td>' +
            '</tr>'
        }
        
         $('#' + idCurrentTable + ' tr:last').before(html);
    }
    $('.BtnPlus').click(addRowTable);
});

//checkbox expanding
$(function () {
    $('.CheckboxToggle').change(function () {
        idOfDiv = $(this).siblings('div').attr('id');
        $('#' + idOfDiv).toggle();
    });
});

//datepicker
$(function () {
    var idCurrentTextbox = $(this).closest('table').attr('id');
    $('.datepicker').datepicker({
        format: 'mm-dd-yyyy'
    });
});

