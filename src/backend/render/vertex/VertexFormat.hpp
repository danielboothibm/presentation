#ifndef VertexFormat_H
#define VertexFormat_H

#include <vector>
#include <string>
#include <any>
#include "VertexFormatElement.hpp"

class VertexFormat{
    private:
        std::vector<VertexFormatElement> elements;
        std::vector<int> offsets;
        int vertexSize;
        int colourElementOffset = -1;
        std::vector<int> uvOffetsById;
        int normalElementOffset = -1;
        int hashCode;

    public:
        VertexFormat(VertexFormat vertexFormatIn){
            this();

            for(size_t i = 0; i < vertexFormatIn.getElementCount(); i++){
                this->addElement(vertexFormatIn.getElement(i));
            }

            this->vertexSize = vertexFormatIn.getSize();
        }

        VertexFormat(){}

        void clear();

        VertexFormat addElement(VertexFormatElement element);

        bool hasNormal();

        int getNormalOffset();

        bool hasColour();

        int getColourOffset();

        bool hasUv(int id);

        int getUvOffsetById(int id);

        std::string toString();

        boolean hasPosition();

        int getIntegerSize();

        size_t getSize();

        std::vector<VertexFormatElement> getElments();

        size_t getElementCount();

        VertexFormatElement getElement(int index);

        int getOffset(int index);

        bool equals(std::any Object);

        int hasCode();
}
#endif //Include Guard