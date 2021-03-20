# books-e2e-api
# To run the tests run npm test. If at the first time they all fail, run the tests again.
#
# Create-Book :
# In this simple test we create a book and send it to the back-end. We check that it was done correctly and 
# verify that the information we receive back is the same as what we sent in the first place.
# Subsequently what we do is to clean the back-end of the information that we use for testing.
#
# Create-Book-Negative :
# In this case we make two test cases. In one we send the user without his name and in the other without his  
# author. Actually these tests should not be left in the back-end, so we make the verification that the name 
# or the author is being saved in null. 
# Subsequently what we do is to clean the back-end of the information that we use for testing.
#
# Delete-Book :
# What we do in this test is to create a book and by means of its id we delete it again, if the operation is 
# correct we should get the indicated status
#
# Delete-Book-Negative :
# What we do in this test is to delete a book that does not exist, actually what we test is that the delete  # independently works, either if it deletes a book, but at the time of making the delete call it is not 
# damaged or does not delete another element that is not the selected one. For what in this test although the 
# book does not exist it gives a positive call.
#
# List-Books :
# In this case, we test that it brings us the elements of the back
#
# List-Books-Negative :
# In this case we test if any of the elements do not exist in the back
#
# Update-Boook :
# In this case we create a book, then we edit its name and author and finally we clean the back of the 
# information we created.
#
# Update-Book-Negative :
# We create two books and what we test is to edit its name without adding the authro and edit its author 
# without adding its name. In this case we test that in the back we are saving these elements in null. 
# Afterwards we delete from the back the information that we have created to clean it of non-relevant 
# information.
#