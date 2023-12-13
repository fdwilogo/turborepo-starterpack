import { Button } from '@repo/web-ui/components/ui/button'

export default async function Page() {
  return (
    <main>
      <p>Page untuk siswa (lost and found)</p>

      <p>
        Dibawah adalah component dari <code>@repo/web-ui</code> di monorepo ini
      </p>

      <Button variant='destructive'>Open popover</Button>
    </main>
  )
}
