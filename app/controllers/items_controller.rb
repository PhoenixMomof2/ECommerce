class ItemsController < ApplicationController
    # skip_before_action :authorize, only: :fake_items

    def index
        render json: Items.all
    end

    # def fake_items 
        # byebug
        # render json: fake_items
    # end


end
