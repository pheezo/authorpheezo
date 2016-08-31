require 'rails_helper'
RSpec.describe Book, type: :model do
	before do
		@book = FactoryGirl.create(:book)
	end

	describe 'name' do
		it 'should be present' do
			@book.name = nil
			expect(@book).not_to be_valid
	end
	
	context 'not unique' do
		it 'should not be valid' do
			other_book = @book.dup
			
			expect(other_book).not_to be_valid
	end
end
end
end