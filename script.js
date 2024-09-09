/*
$(document).ready(function(){
    //add task to list
    $('#addTask').click(function(){
        var task= $('#taskInput').val();
        if (task){
            //append list
            $('#taskList').append('<li><span class="taskText">'+task+'</span><span class="editButton">  Edit</span><span class="removeButton">  Remove</span></li>')
            $('#taskInput').val('');
        }

    })

    //highlight input field
    $('#taskInput').focus(function(){
        $(this).addClass('highlight')
    })

    // removw highlight frominput on blur
    $('#taskInput').blur(function(){
        $(this).removeClass('highlight')
    })

    //mark task as completed
    $('#taskList').on('click','.taskText',function(){
        $(this).toggleClass('completed')
    })

    //remove task from the list
    $('#taskList').on('click','.removeButton',function(){
        $(this).parent().remove();
    })
    //edit task text
    $('#taskList').on('click','.editButton',function(){
       var $taskText= $(this).siblings('.taskText')
       var currentText= $taskText.text();
       var newText= prompt('Edit Task:',currentText)
       if(newText){
        $taskText.text(newText);
       }
      
    })
    //event for mouseenter
    $('#taskList').on('mouseenter','.taskText',function(){
        $(this).css('cursor','pointer')
    })

})
    */
$(document).ready(function(){
    // Add task to the list
    $('#addTask').click(function(){
        var task = $('#taskInput').val();
        if (task){
            // Append the task to the list
            $('#taskList').append('<li><span class="taskText">'+task+'</span><span class="editButton">  Edit</span><span class="removeButton">  Remove</span></li>');
            $('#taskInput').val(''); // Clear the input field
        }
    });

    // Highlight input field on focus
    $('#taskInput').focus(function(){
        $(this).addClass('highlight');
    });

    // Remove highlight from input field on blur
    $('#taskInput').blur(function(){
        $(this).removeClass('highlight');
    });

    // Mark task as completed
    $('#taskList').on('click','.taskText',function(){
        $(this).toggleClass('completed');
    });

    // Remove task from the list
    $('#taskList').on('click','.removeButton',function(){
        $(this).parent().remove();
    });

    // Edit task text
    $('#taskList').on('click','.editButton',function(){
        var $taskText = $(this).siblings('.taskText');
        var currentText = $taskText.text();
        var newText = prompt('Edit Task:',currentText);
        if(newText){
            $taskText.text(newText);
        }
    });

    // Event for mouseenter
    $('#taskList').on('mouseenter','.taskText',function(){
        $(this).css('cursor','pointer');
    });
});
