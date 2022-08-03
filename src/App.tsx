import { Product } from './components/Product'
import { useProducts } from './hooks/hProducts'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/Error'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import { useState } from 'react'

function App() {
  const { loading, error, products } = useProducts()
  const [modal, setModal] = useState(true)

  return (
    <div className="container mx-auto max-w-2xl pt-5 ">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && <Modal title="Create new product">
        <CreateProduct onCreate={() => setModal(false)}/>
      </Modal>}
    </div>
  )
}

export default App
