import { useState } from "react";
import { Box, Button, Checkbox, Container, Flex, Input, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo List</Text>
        <Flex width="100%">
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            mr={2}
          />
          <Button onClick={addTodo} colorScheme="blue">
            Add
          </Button>
        </Flex>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" alignItems="center" justifyContent="space-between">
              <Checkbox isChecked={todo.completed} onChange={() => toggleComplete(index)}>
                <Box as="span" textDecoration={todo.completed ? "line-through" : "none"}>
                  {todo.text}
                </Box>
              </Checkbox>
              <Button colorScheme="red" size="sm" onClick={() => deleteTodo(index)}>
                <FaTrash />
              </Button>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;