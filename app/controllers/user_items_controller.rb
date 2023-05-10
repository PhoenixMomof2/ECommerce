class UserItemsController < ApplicationController
 before_action :authorize, only: :cart

    # 1:1 why are we using 2 if statements back to back and i this considered a create or update action?
    # 1:1 a user can only add or subtract userItems from cart. A user cannot create a userItem or Item. 
    # 1:1 can the cart method be considered a create or update?
    def cart
        cartItem = UserItem.find{|userItem| userItem.item_id === params[:item_id] && userItem.user_id === params[:user_id]}
        if(cartItem)
            if(params[:step] == "add")
                cartItem.update(quantity: cartItem.quantity += 1)
            elsif(params[:step] == "subtract")
                cartItem.update(quantity: cartItem.quantity -= 1)
            end
            render json: cartItem
        else
            @user_item = UserItem.create(user_item_params)
            render json: @user_item
        end
    end
    # 1:1 should my params be :item_id? UserItem table has item_id & user_id.
    def index
        @user_item = UserItem.find(params[:id]) 
        render json: @user_item
    end


    def show
        @user_items = @user.user_items
        render json: @user_items 
    end

    # 1:1 should i be drestroying params[item_id]
    def destroy
        @user_item = UserItem.find(params[:id]) 
        @user_item.destroy
    end

    private
    # 1:1 .merge - no block is specified so the value of duplicate keys will be that of the other_hash
    # is .merge(quantity: 1) take the new quantity value?
    def user_item_params
        params.permit(:user_id, :item_id, :quantity).merge(quantity: 1)
    end


end
