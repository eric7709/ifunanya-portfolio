from abc import ABC, abstractmethod
import math
# ==========================================
# Abstract Base Class: Shape
# ==========================================
class Shape(ABC):
    """
    An abstract base class that defines the blueprint for all shapes.
    Uses 'ABC' to prevent direct instantiation and enforce method overriding.
    """
    def __init__(self, color, number_of_sides, name):
        # Double underscores (__) invoke Name Mangling for private encapsulation
        self.__color = color
        self.__number_of_sides = number_of_sides
        self.__name = name
    @property
    def color(self):
        """Read-only property for the shape's color."""
        return self.__color
    @property
    def number_of_sides(self):
        """Read-only property for the count of sides."""
        return self.__number_of_sides
    @property
    def name(self):
        """Read-only property for the shape's identifier."""
        return self.__name
    @abstractmethod
    def area(self):
        """Must be implemented by subclasses to return the surface area."""
        pass
    @abstractmethod
    def perimeter(self):
        """Must be implemented by subclasses to return the boundary length."""
        pass
# ==========================================
# Subclass: Circle
# ==========================================
class Circle(Shape):
    """Represents a circle; inherits from Shape."""
    def __init__(self, radius, color="Red"):
        # Validation logic to ensure data integrity
        if radius <= 0:
            raise ValueError("Radius must be positive")
        # Initialize the parent class with fixed values for a circle
        super().__init__(color, number_of_sides=0, name="Circle")
        self.__radius = radius
    @property
    def radius(self):
        """Getter for the circle's radius."""
        return self.__radius
    def area(self):
        """Calculates area using: πr²"""
        return math.pi * (self.__radius ** 2)
    def perimeter(self):
        """Calculates circumference using: 2πr"""
        return 2 * math.pi * self.__radius
# ==========================================
# Subclass: Rectangle
# ==========================================
class Rectangle(Shape):
    """Represents a rectangle; inherits from Shape."""
    def __init__(self, width, height, color="Blue"):
        if width <= 0 or height <= 0:
            raise ValueError("Width and height must be positive")
        super().__init__(color, number_of_sides=4, name="Rectangle")
        self.__width = width
        self.__height = height
    @property
    def width(self):
        return self.__width
    @property
    def height(self):
        return self.__height
    def area(self):
        """Calculates area using: width * height"""
        return self.__width * self.__height
    def perimeter(self):
        """Calculates perimeter using: 2 * (width + height)"""
        return 2 * (self.__width + self.__height)
# ==========================================
# Implementation & Polymorphism
# ==========================================
# A list containing different types of Shape objects
shapes = [
    Circle(radius=5, color="Green"), 
    Rectangle(width=4, height=6, color="Purple"), 
    Circle(radius=12, color="Blue"), 
    Rectangle(width=4, height=6, color="Red")
]
for shape in shapes:
    term = "Circumference" if shape.name == "Circle" else "Perimeter"
    print(f"{'Shape name':<15}: {shape.name}")
    print(f"{'Color':<15}: {shape.color}")
    print(f"{'Sides':<15}: {shape.number_of_sides}")
    print(f"{'Area':<15}: {shape.area():.2f}")
    print(f"{term:<15}: {shape.perimeter():.2f}\n")