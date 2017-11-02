
    window.onload = function(){
        var selctA = document.querySelector('#searchAll');
        
        selctA.addEventListener('click', function(){
            console.log('button clicked');
            var httpRequest = new XMLHttpRequest();
            
            //GET Request
            var url = "request.php";
            httpRequest.onreadystatechange = findAll();
            
            alert('request sent');
            function findAll(){
                if(httpRequest.readyState === XMLHttpRequest.DONE){
                    if(httpRequest.status === 200){
                        var response = httpRequest.responseXML;
                        var results = document.querySelector('#results');
                        var dict = response.getElementsByTagName('word');
                        
                        var list = document.createElement('ul');
                        results.appendChild(list);
                        for (var i = 0; i<dict.length; i++){
                            var word = document.createElement('li');
                          //  var text = document.createElement('h3');
                            
                            var parser = new DOMParser();
                            var text = parser.parseFromString(text,"text/xml");

                            text.innerHTML = dict[i].children[0].childNode[0].nodeValue;
                            word.appendChild(text);
                            list.appendChild(word);
                        }
                    }else{
                        alert('There was a problem with the request.');
                    }
                }
            }
            
            httpRequest.open('GET',url);
            httpRequest.send();
        });
        
      
         function prevDef(event){
             event.preventDefault;
             return false;
         }
        
        var find = document.getElementById('search');
        find.addEventListener('click', function(a){
            a.preventDefault();
            searchWord();
            console.log('loaded');
        });
        
        

        
        function searchWord(){
        console.log('Search function loaded');
        if (document.getElementById('word').value == ''){
            alert('Please Enter a word ');
        }else 
        var httpRequest = new XMLHttpRequest();
        var searchBar = document.getElementById('word').value;
        var url =  'https://info2180-lab6-aldaneb.c9users.io/request.php?q=' + searchBar;
        httpRequest.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200){
                document.getElementById('result').innerHTML = this.responseText;
            }
        };
        
        httpRequest.open('GET', url);
        httpRequest.send();
        }
    };
        

        
        /*function searchAll(){
            $(document).ready(function(){
                var all = $('#searchAll');
                
                all.on('click', function(){
                    $.ajax('request.php',{
                        method: 'GET'
                    }).done(function(response){
                        console.log('response sent');
                        var dict = $(response).find('word');
                        $('#result').append("<ul><ul>");
                        $(dict).each(function(){
                            $('#result ul').append('<li>' + $(this).find('sr').text() + '<br>' + $(this).find('defn').text() + '<li>');
                        });
                    }).fail(function(){
                        alert('There was a problem with the request');
                    });
                });
            });
        }*/
        

    
   
