import { FormattedMessage } from "react-intl";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm font-medium">
            <FormattedMessage
              id="testimonials.badge"
              defaultMessage="Testimonials"
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800">
            <FormattedMessage
              id="testimonials.title"
              defaultMessage="What Our Users Say"
            />
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-lg">
            <FormattedMessage
              id="testimonials.subtitle"
              defaultMessage="Don't just take our word for it. Here's what content creators are saying about Titro."
            />
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-200">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  <FormattedMessage
                    id="testimonials.testimonial1.name"
                    defaultMessage="Sarah Johnson"
                  />
                </h4>
                <p className="text-sm text-gray-600">
                  <FormattedMessage
                    id="testimonials.testimonial1.role"
                    defaultMessage="Content Creator"
                  />
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              <FormattedMessage
                id="testimonials.testimonial1.content"
                defaultMessage="Titro has been a game-changer for my YouTube channel. I can now reach a global audience without spending hours on manual subtitling."
              />
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-200">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  <FormattedMessage
                    id="testimonials.testimonial2.name"
                    defaultMessage="Michael Chen"
                  />
                </h4>
                <p className="text-sm text-gray-600">
                  <FormattedMessage
                    id="testimonials.testimonial2.role"
                    defaultMessage="Filmmaker"
                  />
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              <FormattedMessage
                id="testimonials.testimonial2.content"
                defaultMessage="The accuracy of the subtitles is impressive. I've tried other tools, but Titro consistently delivers the best results for my documentary films."
              />
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-200">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">
                  <FormattedMessage
                    id="testimonials.testimonial3.name"
                    defaultMessage="Elena Rodriguez"
                  />
                </h4>
                <p className="text-sm text-gray-600">
                  <FormattedMessage
                    id="testimonials.testimonial3.role"
                    defaultMessage="Marketing Director"
                  />
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              <FormattedMessage
                id="testimonials.testimonial3.content"
                defaultMessage="Our marketing videos now reach audiences in multiple countries thanks to Titro. The process is so simple, and the results are fantastic."
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
