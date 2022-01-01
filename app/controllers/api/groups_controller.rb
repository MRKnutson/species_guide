class Api::GroupsController < ApplicationController
  before_action :set_phylum
  before_action :set_group, only: [:show, :update, :destroy]

  def index
    render json: @phylum.groups
  end

  def show
    render json: @group
  end

  def create
    @group = @phylum.groups.new(group_params)
    if (@group.save)
      render json: @group
    else
      render json: { errors: @group.errors }, status: 422
    end
  end

  def update
    if (@group.update(group_params))
      render json: @group
    else
      render json: { errors: @group.errors }, status: 422
    end
  end

  def destroy
    render json: @group.destroy
  end


  private

  def group_params
    params.require(:group).permit(:name)
  end

  def set_phylum
    @phylum=Phylum.find(params[:phylum_id])
  end

  def set_group
    @group = @phylum.groups.find(params[:id])
  end
end
