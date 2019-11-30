var x = 0;
var per = "Player-X";
var flag = 0;
var c = 0;

function doplay(ref) {

    if (x == 0) {
        ref.value = "O";
        x = 1;
        ref.disabled = true;
        document.getElementById("person").value = per;
        per = "Player-O";
        document.getElementById("ans").value = per + " Wins !!!";
        c++;
    } else {
        ref.value = "X";
        x = 0;
        ref.disabled = true;

        document.getElementById("person").value = per;
        per = "Player-X";
        document.getElementById("ans").value = per + " Wins !!!";
        c++;

    }
    for (i = 0; i <= 6 && i % 3 == 0; i += 3) {
        if (document.getElementById(i).value === document.getElementById(i + 1).value && document.getElementById(i).value === document.getElementById(i + 2).value && document.getElementById(i).value != "") {
            $(document).ready(function () {

                $("#popup").fadeIn(-20);
                $("#main").fadeOut(-20);
                $("#bbtn").fadeOut(-20);
                $("#newbtn").fadeOut(-20);
                $("#btm").fadeOut(-20);
                $("#tab").addClass("extra");

            });
            for (j = 0; j < 9; j++)
                document.getElementById(j).disabled = true;
            flag = 1;
        }

    }
    for (i = 0; i <= 2; i++) {
        if (document.getElementById(i).value === document.getElementById(i + 3).value && document.getElementById(i).value === document.getElementById(i + 6).value && document.getElementById(i).value != "") {
            $(document).ready(function () {

                $("#popup").fadeIn(-20);
                $("#main").fadeOut(-20);
                $("#bbtn").fadeOut(-20);
                $("#newbtn").fadeOut(-20);
                $("#btm").fadeOut(-20);
                $("#tab").addClass("extra");

            });
            for (j = 0; j < 9; j++)
                document.getElementById(j).disabled = true;
            flag = 1;

        }
    }
    if (document.getElementById(0).value == document.getElementById(4).value && document.getElementById(0).value == document.getElementById(8).value && document.getElementById(0).value != "") {
        $(document).ready(function () {

            $("#popup").fadeIn(-20);
            $("#main").fadeOut(-20);
            $("#bbtn").fadeOut(-20);
            $("#newbtn").fadeOut(-20);
            $("#btm").fadeOut(-20);
            $("#tab").addClass("extra");


        });
        for (j = 0; j < 9; j++)
            document.getElementById(j).disabled = true;
        flag = 1;

    }
    if (document.getElementById(2).value == document.getElementById(4).value && document.getElementById(2).value == document.getElementById(6).value && document.getElementById(2).value != "") {
        $(document).ready(function () {

            $("#popup").fadeIn(-20);
            $("#main").fadeOut(-20);
            $("#bbtn").fadeOut(-20);
            $("#newbtn").fadeOut(-20);
            $("#btm").fadeOut(-20);
            $("#tab").addClass("extra");


        });
        for (j = 0; j < 9; j++)
            document.getElementById(j).disabled = true;
        flag = 1;

    }
    if (flag == 0 && c == 9) {
        document.getElementById("ans").value = "It's a Draw !!!";

        $(document).ready(function () {

            $("#popup").fadeIn(-20);
            $("#main").fadeOut(-20);
            $("#bbtn").fadeOut(-20);
            $("#newbtn").fadeOut(-20);
            $("#btm").fadeOut(-20);
            $("#tab").addClass("extra");


        });
        for (j = 0; j < 9; j++)
            document.getElementById(j).disabled = true;
        flag = 1;
    }

}

function doNew() {
    for (i = 0; i < 9; i++) {
        document.getElementById(i).disabled = false;
        document.getElementById(i).value = "";
    }
    $(document).ready(function () {

        $("#popup").fadeOut(-20);
        $("#main").fadeIn(-20);
        $("#bbtn").fadeIn(-20);
        $("#newbtn").fadeIn(-20);
        $("#btm").fadeIn(-20);
        $("#tab").removeClass("extra");


    });
    x = 0;
    per = "Player-X";
    document.getElementById("person").value = "Player-O";
    c = 0;
    flag = 0;

}
