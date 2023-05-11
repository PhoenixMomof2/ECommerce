class ItemsController < ApplicationController
    skip_before_action :authorize, only: :index

    # TODO : may need to render current_user.items to shopping cart nest items in particular cart
    # This may need to happen in user_items_controller
    def index
        # if current_user
        #     render json: current_user.items
        # else
            render json: Item.all, status: :ok
    end

    # TODO : if we GET one item, we should also see that item's reviews
    def show
        @items = Item.find(params [:id])
       
        render json: @item

    end
end
