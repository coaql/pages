statement = {
		'amount':'',
		'date':'',
		'category':''
		}
$(document).ready(function()
{	$('#add-stat').on('submit',function(e)
	{	statement.amount = $('#Amount').val();
		statement.date = $('#Date').val();
		statement.category = $('#Category').val();

		$.ajax({ data: statement, type :'POST', url :'/pocket'}).done(function(data){alert(data)});
	
		$.ajax({data:'', type :'GET', url:'/pocket'})
			.done(function(data)
					{
						for(i in data) 
								$('#display-stat').find('ul').append($('blip'));
					});
		e.preventDefault();
	});

	
});


