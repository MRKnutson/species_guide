class Api::PhylumsController < ApplicationController
  before_action :set_phylum, only: [:show, :update, :destroy]

  def index
    render json: Phylum.all
  end

  def show
    render json: @phylum
  end

  def create
    @phylum = Phylum.new(phylum_params)
    if (@phylum.save)
      render json: @phylum
    else
      render json: { errors: @phylum.errors }, status: 422
    end
  end

  def update
    if (@phylum.update(phylum_params))
      render json: @phylum
    else
      render json: { errors: @phylum.errors }, status: 422
    end
  end

  def destroy
    render json: @phylum.destroy
  end


  private

  def phylum_params
    params.require(:phylum).permit(:name)
  end

  def set_phylum
    @phylum=Phylum.find(params[:id])
  end

end
