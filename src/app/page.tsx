import {
  Box,
  Button,
  Group,
  Heading,
  Popover,
  Text,
  VStack,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Box px="3" py="5" bg="bg.muted">
      <VStack py="20" gap="7">
        <VStack maxW="xl" textAlign="center" color="fg" gap="4">
          <Heading size="4xl">
            Chakra UI is a simple, modular and accessible component library
          </Heading>
          <Text mb="4" color="fg.muted">
            Chakra UI is a simple, modular and accessible component library that
            gives you the building blocks you need to build your React
            applications.
          </Text>
        </VStack>

        <Group>
          <Button>Click me</Button>
          <Button variant="outline">Click me</Button>
        </Group>

        <Popover.Root lazyMount positioning={{ placement: 'right-end' }}>
          <Popover.Trigger asChild>
            <Button>Open</Button>
          </Popover.Trigger>

          <Popover.Positioner>
            <Popover.Content>
              <Popover.Header fontWeight="medium">Confirmation</Popover.Header>
              <Popover.Body>
                Are you sure you want to delete this item?
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Popover.Root>
      </VStack>
    </Box>
  )
}
