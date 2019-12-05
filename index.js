'use strict';

//function for adding new items to the list

$('form').submit(function(event) {
  event.preventDefault();

  let newItem = $('input').val();

  let newEntry = $(`<li>
  <span class="shopping-item">${newItem}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
  </li>`);

  $('.shopping-list').append(newEntry);
  
  console.log(`added ${newItem}`);

  // Clears the input box after submitting.  Comment out line 28 to keep text.

  $('input:text').val('');

});

//function for the delete button

$('div').on('click', 'button.shopping-item-delete', function(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log('clicked a delete button');
  $(this).closest('li').remove(); 
  
  
});

//function for the check button

$('div').on('click', 'button.shopping-item-toggle', function(event) {
  console.log('clicked a toggle button');
  event.preventDefault();
  event.stopPropagation();
  $(this).closest('li').children('span').toggleClass('shopping-item__checked');  
});


