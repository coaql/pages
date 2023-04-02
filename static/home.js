statements={}
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

		$.ajax({ data: statement, type :'POST', url :'/pocket'})
			.done(function(data)
			{
				$('#display-stat > ul')
					.prepend('<li> you have spent Rs '
						+ data[0].amount 
						+ ' on ' 
						+ data[0].date 
						+ ' for '
						+ data[0].category 
						+ '</li>'
					);
				
				//alert(data.length);
			});
		e.preventDefault();
	});
	report();
});

function report()
{
	$.ajax({type:'GET', url:'/pocket'})
		.done(function (data)
			{
				for (i in data)
				$('#display-stat > ul').append('<li> you have spent Rs '+ data[i].amount + ' on ' + data[i].date + ' for '+ data[i].category + '</li>');
				statements = data;
				for(i in data)
				console.log(data[i].amount);
			});
}
