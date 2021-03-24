#ifndef VertexFormatElement_H
#define VertexFormatElement_H

#include <string>
#include <any>
#include <GLES2/gl2.h>
#include <EGL/egl.h>

class VertexFormatElement {
private:
	VertexTypeAndUsage::Type type;
	VertexTypeAndUsage::Usage usage;
	int index;
	int elementCount;
	bool isFirstOrUV(int index, VertexTypeAndUsage::Usage VertexUse);

public:
	VertexFormatElement(int indexIn, VertexTypeAndUsage::Type typeIn, VertexTypeAndUsage::Usage usageIn, int count);
	VertexTypeAndUsage::Type getType();
	VertexTypeAndUsage::Usage getUsage();
	int getElementCount();
	int getIndex();
	std::string toString();
	size_t getSize();
	bool isPositionElement();
	bool equals(std::any& object) const;
    bool equals(const std::any& object) const;
	int hashCode();
};

bool operator==(const VertexFormatElement& lhs, const VertexFormatElement& rhs){
    return lhs.equals(std::make_any<VertexFormatElement>(rhs)) && rhs.equals(std::make_any<VertexFormatElement>(lhs));
}

namespace VertexTypeAndUsage{

    //Float Vertex format for OpenGL
    static Type FLOAT(4, "Float", GL_FLOAT);
    //Unsigned Byte Vertex format for OpenGL
    static Type UBYTE(1, "Unsigned Byte", GL_UNSIGNED_BYTE);
    //Byte Vertex format for OpenGL
    static Type BYTE(1, "Byte", GL_BYTE);
    //Unsigned Short vertex format for OpenGL
    static Type USHORT(2, "Unisgned Byte", GL_UNSIGNED_SHORT);
    //Short vertex format for OpenGL
    static Type SHORT(2, "Short", GL_SHORT);
    //Unsigned int vertex format for OpenGL
    static Type UINT(4, "Unsigned Int", GL_UNSIGNED_INT);
    //int vertex format for OpenGL
    static Type INT(4, "Int", GL_INT);

    //Type of data the Vertex expects in.
    class Type{
    private:
        size_t size;
        std::string displayName;
        int glConstant;

    public:
        Type(size_t sizeIn, std::string displayNameIn, int glConstantIn){
            this->size = sizeIn;
            this->displayName = displayNameIn;
            this->glConstant = glConstantIn;
        }

        int getSize(){
            return this->size;
        }

        std::string getDisplayName(){
            return this->displayName;
        }

        int getGlConstant(){
            return this->glConstant;
        }
    };

    static Usage POSITION("Position");
    static Usage NORMAL("Normal");
    static Usage COLOUR("Vertex Colour");
	static Usage UV("UV");
	static Usage MATRIX("Bone Matrix");
	static Usage BLEND_WEIGHT("Blend Weight");
	static Usage PADDING("Padding");
	static Usage GENERIC("Generic");

    class Usage{
    private:
        std::string displayName;
    public:
        Usage(std::string displayNameIn){
            this->displayName = displayNameIn;
        }

        std::string getDisplayName(){
            return this->displayName;
        }
    };
}
#endif //Include Guard