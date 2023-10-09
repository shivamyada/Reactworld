import React from "react";
function card({username , btnText}){
    return(
    
      <div class="flex font-sans">
  <div class="flex-none w-48 relative">
    <img src="data:image/jpeg;base64,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" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        {username}
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          {btnText}
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
    

  )
}

export default card

    
    
   