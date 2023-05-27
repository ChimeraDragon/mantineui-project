import { Grid } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function Cards() {
    return (
      <div className="Cards">
    <Grid justify="space-around">
      <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
        
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://i1.sndcdn.com/artworks-7UGIAD6Gm4kKP6da-QolPbQ-t500x500.jpg"
          height={160}
          alt="Norway"
          fit="contain"
        
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
        
        
        </Grid.Col>
      <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
        
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://i1.sndcdn.com/artworks-7UGIAD6Gm4kKP6da-QolPbQ-t500x500.jpg"
          height={160}
          alt="Norway"
          fit="contain"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        DRIP COCK. AS YOU CAN SEE THIS IS A DRIP COCK
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book a drip cock NOW
      </Button>
    </Card>
        
        </Grid.Col>
      <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
        
        
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://i1.sndcdn.com/artworks-7UGIAD6Gm4kKP6da-QolPbQ-t500x500.jpg"
          height={160}
          alt="Norway"
          fit="contain"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
        
        
        </Grid.Col>
    </Grid>
      </div>
    );
  }