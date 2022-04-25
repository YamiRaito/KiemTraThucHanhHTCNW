$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {
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

    function kiemTraSCMND() {
        let mauKT = /([0-9]{9})$/;
        if ($("#SCMND").val() == "") {
            $("#tbSCMND").html("Không được để trống");
            return false;
        }
        if (!mauKT.test($("#SCMND").val())) {
            $("#tbSCMND").html("nhập đủ 9 chữ số");
            return true;
        }
        $("#tbSCMND").html("*");
        return true;
    }
    $("#CMND").blur(kiemTraSCMND);


    function KiemTraQuequan() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*) *$/;
        if ($("#Quequan").val() == "") {
            $("#tbQuequan").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Quequan").val())) {
            $("#tbQuequan").html("Mỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbQuequan").html("*");
        return true;

    }
    $("#DC").blur(KiemTraQuequan);


    function KiemTraEmail() {
        var mauKT = /^([a-zA-Z0-9]{6}})@iuh.edu.vn\ $/;
        if ($("#Email").val() == "") {
            $("#tbEmail").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Email").val())) {
            $("#tbMEmail").html(" Email nhập theo mẫu xxxxxx@iuh.edu.vn");
            return true;
        }
        $("#tbEmail").html("*");
        return true;

    }
    $("#DC").blur(KiemTraEmail);

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
        if (kiemTraTen() == true && kiemTraSCMND() == true && KiemTraQuequan() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + $("#SCMND").val() + "</th>";
            row += "<th>" + $("#Quequan").val() + "</th>";
            row += "<th>" + $("#Email").val() + "</th>";
            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })

})