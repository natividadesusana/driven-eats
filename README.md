# Project developed for Bootcamp Driven Education

### *Mobile Layout*

<img width="412" alt="Captura de Tela 2023-01-07 às 21 26 13" src="https://user-images.githubusercontent.com/95102911/211175218-fcfda5fb-e169-4196-af43-a26020d52edf.png">

<img width="412" alt="Captura de Tela 2023-01-07 às 21 27 44" src="https://user-images.githubusercontent.com/95102911/211175221-e4f17375-6fa5-469d-9f3b-f2cba8bd46c3.png">

<img width="411" alt="Captura de Tela 2023-01-09 às 17 15 49" src="https://user-images.githubusercontent.com/95102911/211399701-59b56df0-6527-468f-a3df-103dedb029a7.png">

____

#### Requirements for the project:

- Code versioning
     - [ ] Versioning using Git is mandatory, create a **public repository** on your GitHub profile.
     - [ ] Make *commits* for each implemented feature.
- *Layout*
     - [ ] Apply layout for *mobile*, following the provided Figma (it is not necessary to implement a *layout* for *desktop*).
     - [ ] The top and close order button must have fixed positioning and not scroll with the scroll bar.
     - [ ] You can use random images and texts to illustrate the page, but vary the price for each item in the same category.
     - [ ] The fonts used are: [Righteous](https://fonts.google.com/specimen/Righteous) (restaurant name and category titles) and [Roboto](https://fonts.google.com/ specimen/Roboto) (other texts).
     - [ ] To make the shadows present in some elements, search on how to apply shadows in CSS and play with the values until it looks like the *layout* images.
     - [ ] To make the products scroll horizontally, use `overflow-x: scroll`. In desktop mode a *scroll* is displayed, but not in mobile mode.
- Selection of items
     - [ ] When clicking on an item, it must be marked as selected.
     - [ ] When clicking on an item, if there is already an item selected in the same category, it must be unmarked and the new item clicked must be the new one selected.
     - [ ] When clicking on an item already marked, it is not necessary to unmark it.
- Finish order button
     - [ ] By default, the checkout button should be disabled. When clicking the button in this state, nothing should happen.
         - In addition to changing the style, use the **disabled** attribute in the button tag HTML.
     - [ ] When the user has selected items from the three categories, the button should change to the enabled state.
- Sending the order
     - [ ] When finalizing the order, the user must be forwarded to WhatsApp Web, in conversation with the restaurant contact, already with a pre-filled standard message.
     - [ ] This message must follow this format, the pattern below:
```
    Olá, gostaria de fazer o pedido:
    - Prato: [Nome do Prato]
    - Bebida: [Nome da Bebida]
    - Sobremesa: [Nome da Sobremesa]
    Total: [Valor Total do Pedido] 
      
    Nome: [Nome do Cliente]
    Endereço: [Rua Para Envio do Pedido]
```


