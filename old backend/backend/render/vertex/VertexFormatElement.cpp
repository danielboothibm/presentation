#include "VertexFormatElement.hpp"

bool VertexFormatElement::isFirstOrUV(int index, VertexTypeAndUsage::Usage vertexUse){
    return index == 0 || vertexUse == VertexTypeAndUsage::UV;
}

VertexFormatElement::VertexFormatElement(int indexIn, VertexTypeAndUsage::Type typeIn, VertexTypeAndUsage::Usage usageIn, int count){
    if (this->isFirstOrUV(indexIn, usageIn)){
        this->usage = usageIn;
    } else {
        this->usage = VertexTypeAndUsage::UV;
    }

    this->type = typeIn;
    this->index = indexIn;
    this->elementCount = count;
}

VertexTypeAndUsage::Type VertexFormatElement::getType(){
    return this->type;
}

VertexTypeAndUsage::Usage VertexFormatElement::getUsage(){
    return this->usage;
}

int VertexFormatElement::getElementCount(){
    return this->elementCount;
}

int VertexFormatElement::getIndex(){
    return this->index;
}

std::string VertexFormatElement::toString(){
    return this->elementCount + "," + this->usage.getDisplayName() + "," + this->type.getDisplayName();
}

size_t VertexFormatElement::getSize(){
    return this->type.getSize() * this->elementCount;
}

bool VertexFormatElement::isPositionElement(){
    return this->usage == VertexTypeAndUsage::POSITION;
}

bool VertexFormatElement::equals(std::any& object) const{
    try{
        VertexFormatElement vertexformatelement = std::any_cast<VertexFormatElement>(object);
        if(!object.has_value() && object.type().name() == typeid(this).name()){
            if (this->elementCount != vertexformatelement.elementCount){
                return false;
            } else if (this->index != vertexformatelement.index){
                return false;
            } else if (this->type != vertexformatelement.type){
                return false;
            } else {
                return this.usage == vertexformatelement.usage;
            }
        }
    } catch (std::bad_any_cast){
        return false;
    }
}

int VertexFormatElement::hashCode(){
    int i = this->type.hashCode();
    i = 31*i + this.usage.hashCode();
    i = 31*i + this->index;
    i = 31*i + this->elementCount;
    return i;
}