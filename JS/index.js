$(document).ready(function() {
    var i = 1;
   $("#btn2").click(function(){
       $("#myModal").modal();
   });
   function kiemTraTen() {
    var i = 1;
    let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    if ($("#Name").val() == "") {
        $("#tbName").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#Name").val())) {
        $("#tbName").html("Mỗi ký tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbName").html("*");
    return true;
 }
 $("#Name").blur(kiemTraTen);

 function kiemTraCMND() {
    let mauKT = /([0-9]{9})$/;
    if ($("#CMND").val() == "") {
        $("#tbCMND").html("Không được để trống");
        return false;
    }
    if (!mauKT.test($("#CMND").val())) {
        $("#tbCMND").html("nhập đủ 9 chữ số");
        return true;
    }
    $("#tbCMND").html("*");
    return true;
 }
 $("#CMND").blur(kiemTraCMND);


function KiemTraDiaChi() {
    var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*) *$/;
    if ($("#DC").val() == ""){
        $("#tbDc").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#DC").val())) {
        $("#tbDc").html("Mỗi ký tự đầu viết hoa không sử dụng số");
        return true;
    }
    $("#tbDc").html("*");
    return true;

}
$("#DC").blur(KiemTraDiaChi);


function KiemTraEMAIL() {
    var mauKT = /^([a-zA-Z0-9]{6}})@iuh.edu.vn\ $/;
    if ($("#MAIL").val() == ""){
        $("#tbMAIL").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#MAIL").val())) {
        $("#tbMAIL").html(" Email nhập theo mẫu xxxxxx@iuh.edu.vn" );
        return true;
    }
    $("#tbMAIL").html("*");
    return true;

}
$("#DC").blur(KiemTraEMAIL);

function kiemTraSDT() {
    var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
    if ($("#SDT").val() == "") {
        $("$tbSDT").html("Không để trống");
        return false;
    }
    if (!mauKT.test($("#SDT").val())) {
        $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
        return true;
    }
    $("#tbSDT").html("*");
    return true;
}
$("#SDT").blur(kiemTraSDT);



$("#Save").click(function() {
        if (kiemTraTen() == true  && kiemTraCMND() == true && KiemTraDiaChi() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#CMND").val() + "</th>";
            row += "<th>" + $("#DC").val() + "</th>";
            row += "<th>" + $("#MAIL").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })

})

