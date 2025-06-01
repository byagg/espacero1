import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shell } from "@/components/Shell"

const VenuePage = () => {
  return (
    <Shell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle>Venue 1</CardTitle>
            <CardDescription>Description of Venue 1</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for Venue 1</p>
            <Button className="bg-amber-500 text-white border-amber-500">Book Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle>Venue 2</CardTitle>
            <CardDescription>Description of Venue 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for Venue 2</p>
            <Button className="bg-amber-500 text-white border-amber-500">Book Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle>Venue 3</CardTitle>
            <CardDescription>Description of Venue 3</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for Venue 3</p>
            <Button className="bg-amber-500 text-white border-amber-500">Book Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-md">
          <CardHeader>
            <CardTitle>Venue 4</CardTitle>
            <CardDescription>Description of Venue 4</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for Venue 4</p>
            <Button className="bg-amber-500 text-white border-amber-500">Book Now</Button>
            <Button variant="outline" className="border-gray-300 bg-white text-gray-700">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </Shell>
  )
}

export default VenuePage
