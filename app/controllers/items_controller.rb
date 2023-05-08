class ItemsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Items.all
    end

    # def fake_items 
        # byebug
        # render json: fake_items
    # end


end
