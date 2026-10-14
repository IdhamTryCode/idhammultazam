import Image from 'next/image'

const menu = [
  { name: 'Nasi Goreng', price: 'Rp 15.000', swatch: '#FDE7C2', qty: 2 },
  { name: 'Es Teh', price: 'Rp 4.000', swatch: '#D7E5FB' },
  { name: 'Mie Ayam', price: 'Rp 13.000', swatch: '#F6DCCB' },
  { name: 'Kopi Susu', price: 'Rp 8.000', swatch: '#E5DACB', qty: 1 },
]

/**
 * POSin ships on Google Play and has no captured screenshots, so its card
 * stage shows this stand-in cashier screen instead of a real one.
 */
export function PosMock() {
  return (
    <div className="pos" aria-hidden="true">
      <div className="pos__status">
        <span>09:41</span>
        <span>●●●</span>
      </div>

      <div className="pos__bar">
        <Image src="/assets/posin/logo.png" alt="" width={24} height={24} />
        <span className="pos__brand">POSin</span>
        <span className="pos__screen">Kasir</span>
      </div>

      <div className="pos__chips">
        <span className="pos__chip is-on">Semua</span>
        <span className="pos__chip">Makanan</span>
        <span className="pos__chip">Minuman</span>
      </div>

      <div className="pos__grid">
        {menu.map((item) => (
          <div className="pos__item" key={item.name}>
            <div className="pos__thumb" style={{ background: item.swatch }} />
            <div className="pos__label">{item.name}</div>
            <div className="pos__price">{item.price}</div>
            {item.qty ? <span className="pos__qty">{item.qty}</span> : null}
          </div>
        ))}
      </div>

      <div className="pos__cart">
        <span>
          3 item · <strong>Rp 38.000</strong>
        </span>
        <span className="pos__pay">Bayar →</span>
      </div>
    </div>
  )
}
