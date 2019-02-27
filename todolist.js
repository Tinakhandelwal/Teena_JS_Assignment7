
        // click on OK button....
        function clickOnOkbtn() {
            document.getElementById("ok").addEventListener('click', function (event) {
                event.preventDefault();
                var addDate = document.getElementById("date").value;
                var addDescriptionbox = document.getElementById("description").value;
                insertIntoTable(addDate, addDescriptionbox);

            });
        }
        // click on CANCEL button....
        function clickOnCancelbtn() {
            document.getElementById("cancel").addEventListener('click', function (event) {
                event.preventDefault();
                var cancelDate = document.getElementById("date");
                var cancelDescriptionbox = document.getElementById("description");
                var okbtn = document.getElementById("ok");
                var cancelbtn = document.getElementById("cancel");
                cancelDate.remove();
                cancelDescriptionbox.remove();
                okbtn.remove();
                cancelbtn.remove();
            });
        }
        var table = document.createElement('table');

        //Create Table Header......
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var datetext = document.createTextNode("Date");
        th.appendChild(datetext);
        tr.appendChild(th);
        var th1 = document.createElement('th');
        var descriptiontext = document.createTextNode("Description");
        th1.appendChild(descriptiontext);
        tr.appendChild(th1);
        table.appendChild(tr);


        // Insert values inside the table.....
        var arrobj = [];
        function insertIntoTable(addDate, addDescriptionbox) {
            arrobj.push({ "date": addDate, "description": addDescriptionbox });
            console.log(arrobj);
            for (let i = 0; i < arrobj.length; i++) {
                var tr1 = document.createElement('tr');
                tr1.setAttribute('id',"tr"+i)
                var th = document.createElement('th');
                var text1 = document.createTextNode(arrobj[i].date);
                th.appendChild(text1);
                tr1.appendChild(th);
                var th1 = document.createElement('th');
                var text2 = document.createTextNode(arrobj[i].description);
                th1.appendChild(text2);
                tr1.appendChild(th1);
                var th2 = document.createElement('th');
            var delbtn = document.createElement("BUTTON");
            delbtn.innerText = "Delete"
            delbtn.setAttribute('onclick',"removeRow(tr"+i+")");
            th2.appendChild(delbtn);
            tr1.appendChild(th2); 
            }
         
            table.appendChild(tr1);
            document.body.appendChild(table);
            removeRow();
        }
        // click on Add button ....
        function clickAddbtn() {
            var date = document.createElement("INPUT");
            date.setAttribute("type", "date");
            date.setAttribute("id", "date");
            var description = document.createElement("INPUT");
            description.setAttribute("placeholder", "Description");
            description.setAttribute("id", "description");
            var okbtn = document.createElement("BUTTON");
            okbtn.innerText = "OK"
            okbtn.setAttribute('id', 'ok');
            var cancelbtn = document.createElement("BUTTON");
            cancelbtn.innerText = "CANCEL"
            cancelbtn.setAttribute('id', 'cancel');

            var div1 = document.getElementById("btnfield")
            div1.innerHTML = ""

            div1.appendChild(date);
            div1.appendChild(description);
            div1.appendChild(cancelbtn);
            div1.appendChild(okbtn);
            clickOnOkbtn();
            clickOnCancelbtn();
        }
        function removeRow(val) {
          val.remove();
        }